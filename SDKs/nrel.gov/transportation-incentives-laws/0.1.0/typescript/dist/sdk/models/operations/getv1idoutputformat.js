var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GetV1IdOutputFormatOutputFormatEnum;
(function (GetV1IdOutputFormatOutputFormatEnum) {
    GetV1IdOutputFormatOutputFormatEnum["Json"] = "json";
    GetV1IdOutputFormatOutputFormatEnum["Xml"] = "xml";
})(GetV1IdOutputFormatOutputFormatEnum || (GetV1IdOutputFormatOutputFormatEnum = {}));
var GetV1IdOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetV1IdOutputFormatPathParams, _super);
    function GetV1IdOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetV1IdOutputFormatPathParams.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=output_format" }),
        __metadata("design:type", String)
    ], GetV1IdOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetV1IdOutputFormatPathParams;
}(SpeakeasyBase));
export { GetV1IdOutputFormatPathParams };
var GetV1IdOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetV1IdOutputFormatQueryParams, _super);
    function GetV1IdOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetV1IdOutputFormatQueryParams.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=expired" }),
        __metadata("design:type", Boolean)
    ], GetV1IdOutputFormatQueryParams.prototype, "expired", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=poc" }),
        __metadata("design:type", Boolean)
    ], GetV1IdOutputFormatQueryParams.prototype, "poc", void 0);
    return GetV1IdOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetV1IdOutputFormatQueryParams };
var GetV1IdOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetV1IdOutputFormatRequest, _super);
    function GetV1IdOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV1IdOutputFormatPathParams)
    ], GetV1IdOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV1IdOutputFormatQueryParams)
    ], GetV1IdOutputFormatRequest.prototype, "queryParams", void 0);
    return GetV1IdOutputFormatRequest;
}(SpeakeasyBase));
export { GetV1IdOutputFormatRequest };
var GetV1IdOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetV1IdOutputFormatResponse, _super);
    function GetV1IdOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetV1IdOutputFormatResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV1IdOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV1IdOutputFormatResponse.prototype, "statusCode", void 0);
    return GetV1IdOutputFormatResponse;
}(SpeakeasyBase));
export { GetV1IdOutputFormatResponse };
