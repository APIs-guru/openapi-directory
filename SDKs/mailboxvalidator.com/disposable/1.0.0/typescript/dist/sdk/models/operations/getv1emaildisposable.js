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
export var GetV1EmailDisposableFormatEnum;
(function (GetV1EmailDisposableFormatEnum) {
    GetV1EmailDisposableFormatEnum["Json"] = "json";
    GetV1EmailDisposableFormatEnum["Xml"] = "xml";
})(GetV1EmailDisposableFormatEnum || (GetV1EmailDisposableFormatEnum = {}));
var GetV1EmailDisposableQueryParams = /** @class */ (function (_super) {
    __extends(GetV1EmailDisposableQueryParams, _super);
    function GetV1EmailDisposableQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetV1EmailDisposableQueryParams.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetV1EmailDisposableQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GetV1EmailDisposableQueryParams.prototype, "key", void 0);
    return GetV1EmailDisposableQueryParams;
}(SpeakeasyBase));
export { GetV1EmailDisposableQueryParams };
var GetV1EmailDisposableRequest = /** @class */ (function (_super) {
    __extends(GetV1EmailDisposableRequest, _super);
    function GetV1EmailDisposableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV1EmailDisposableQueryParams)
    ], GetV1EmailDisposableRequest.prototype, "queryParams", void 0);
    return GetV1EmailDisposableRequest;
}(SpeakeasyBase));
export { GetV1EmailDisposableRequest };
var GetV1EmailDisposableResponse = /** @class */ (function (_super) {
    __extends(GetV1EmailDisposableResponse, _super);
    function GetV1EmailDisposableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV1EmailDisposableResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV1EmailDisposableResponse.prototype, "getV1EmailDisposable200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV1EmailDisposableResponse.prototype, "statusCode", void 0);
    return GetV1EmailDisposableResponse;
}(SpeakeasyBase));
export { GetV1EmailDisposableResponse };
