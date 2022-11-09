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
export var GetV1CategoryListOutputFormatOutputFormatEnum;
(function (GetV1CategoryListOutputFormatOutputFormatEnum) {
    GetV1CategoryListOutputFormatOutputFormatEnum["Json"] = "json";
    GetV1CategoryListOutputFormatOutputFormatEnum["Xml"] = "xml";
})(GetV1CategoryListOutputFormatOutputFormatEnum || (GetV1CategoryListOutputFormatOutputFormatEnum = {}));
var GetV1CategoryListOutputFormatPathParams = /** @class */ (function (_super) {
    __extends(GetV1CategoryListOutputFormatPathParams, _super);
    function GetV1CategoryListOutputFormatPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=output_format" }),
        __metadata("design:type", String)
    ], GetV1CategoryListOutputFormatPathParams.prototype, "outputFormat", void 0);
    return GetV1CategoryListOutputFormatPathParams;
}(SpeakeasyBase));
export { GetV1CategoryListOutputFormatPathParams };
export var GetV1CategoryListOutputFormatTypeEnum;
(function (GetV1CategoryListOutputFormatTypeEnum) {
    GetV1CategoryListOutputFormatTypeEnum["Tech"] = "tech";
    GetV1CategoryListOutputFormatTypeEnum["User"] = "user";
    GetV1CategoryListOutputFormatTypeEnum["Regulation"] = "regulation";
    GetV1CategoryListOutputFormatTypeEnum["Incentive"] = "incentive";
})(GetV1CategoryListOutputFormatTypeEnum || (GetV1CategoryListOutputFormatTypeEnum = {}));
var GetV1CategoryListOutputFormatQueryParams = /** @class */ (function (_super) {
    __extends(GetV1CategoryListOutputFormatQueryParams, _super);
    function GetV1CategoryListOutputFormatQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetV1CategoryListOutputFormatQueryParams.prototype, "apiKey", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetV1CategoryListOutputFormatQueryParams.prototype, "type", void 0);
    return GetV1CategoryListOutputFormatQueryParams;
}(SpeakeasyBase));
export { GetV1CategoryListOutputFormatQueryParams };
var GetV1CategoryListOutputFormatRequest = /** @class */ (function (_super) {
    __extends(GetV1CategoryListOutputFormatRequest, _super);
    function GetV1CategoryListOutputFormatRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetV1CategoryListOutputFormatPathParams)
    ], GetV1CategoryListOutputFormatRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetV1CategoryListOutputFormatQueryParams)
    ], GetV1CategoryListOutputFormatRequest.prototype, "queryParams", void 0);
    return GetV1CategoryListOutputFormatRequest;
}(SpeakeasyBase));
export { GetV1CategoryListOutputFormatRequest };
var GetV1CategoryListOutputFormatResponse = /** @class */ (function (_super) {
    __extends(GetV1CategoryListOutputFormatResponse, _super);
    function GetV1CategoryListOutputFormatResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetV1CategoryListOutputFormatResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetV1CategoryListOutputFormatResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetV1CategoryListOutputFormatResponse.prototype, "statusCode", void 0);
    return GetV1CategoryListOutputFormatResponse;
}(SpeakeasyBase));
export { GetV1CategoryListOutputFormatResponse };
