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
export var GetV1ValidationSingleFormatEnum;
(function (GetV1ValidationSingleFormatEnum) {
    GetV1ValidationSingleFormatEnum["Json"] = "json";
    GetV1ValidationSingleFormatEnum["Xml"] = "xml";
})(GetV1ValidationSingleFormatEnum || (GetV1ValidationSingleFormatEnum = {}));
var GetV1ValidationSingleQueryParams = /** @class */ (function (_super) {
    __extends(GetV1ValidationSingleQueryParams, _super);
    function GetV1ValidationSingleQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=email" }),
        __metadata("design:type", String)
    ], GetV1ValidationSingleQueryParams.prototype, "email", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetV1ValidationSingleQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GetV1ValidationSingleQueryParams.prototype, "key", void 0);
    return GetV1ValidationSingleQueryParams;
}(SpeakeasyBase));
export { GetV1ValidationSingleQueryParams };
var GetV1ValidationSingleRequest = /** @class */ (function (_super) {
    __extends(GetV1ValidationSingleRequest, _super);
    function GetV1ValidationSingleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV1ValidationSingleQueryParams)
    ], GetV1ValidationSingleRequest.prototype, "queryParams", void 0);
    return GetV1ValidationSingleRequest;
}(SpeakeasyBase));
export { GetV1ValidationSingleRequest };
var GetV1ValidationSingleResponse = /** @class */ (function (_super) {
    __extends(GetV1ValidationSingleResponse, _super);
    function GetV1ValidationSingleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV1ValidationSingleResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV1ValidationSingleResponse.prototype, "getV1ValidationSingle200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV1ValidationSingleResponse.prototype, "statusCode", void 0);
    return GetV1ValidationSingleResponse;
}(SpeakeasyBase));
export { GetV1ValidationSingleResponse };
