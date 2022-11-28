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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var GetV1PocsOutputFormatOutputFormatEnum;
(function (GetV1PocsOutputFormatOutputFormatEnum) {
    GetV1PocsOutputFormatOutputFormatEnum["Json"] = "json";
    GetV1PocsOutputFormatOutputFormatEnum["Xml"] = "xml";
})(GetV1PocsOutputFormatOutputFormatEnum || (GetV1PocsOutputFormatOutputFormatEnum = {}));
var GetV1PocsOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetV1PocsOutputFormatPathParams, _super);
    function GetV1PocsOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=output_format" }),
        __metadata("design:type", String)
    ], GetV1PocsOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetV1PocsOutputFormatPathParams;
}(SpeakeasyBase));
export { GetV1PocsOutputFormatPathParams };
var GetV1PocsOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetV1PocsOutputFormatQueryParams, _super);
    function GetV1PocsOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetV1PocsOutputFormatQueryParams.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" }),
        __metadata("design:type", String)
    ], GetV1PocsOutputFormatQueryParams.prototype, "jurisdiction", void 0);
    return GetV1PocsOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetV1PocsOutputFormatQueryParams };
var GetV1PocsOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetV1PocsOutputFormatRequest, _super);
    function GetV1PocsOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV1PocsOutputFormatPathParams)
    ], GetV1PocsOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetV1PocsOutputFormatQueryParams)
    ], GetV1PocsOutputFormatRequest.prototype, "queryParams", void 0);
    return GetV1PocsOutputFormatRequest;
}(SpeakeasyBase));
export { GetV1PocsOutputFormatRequest };
var GetV1PocsOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetV1PocsOutputFormatResponse, _super);
    function GetV1PocsOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetV1PocsOutputFormatResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetV1PocsOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetV1PocsOutputFormatResponse.prototype, "statusCode", void 0);
    return GetV1PocsOutputFormatResponse;
}(SpeakeasyBase));
export { GetV1PocsOutputFormatResponse };
