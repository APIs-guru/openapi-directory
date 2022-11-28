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
var GetForecastResultJobIdPathParams = /** @class */ (function (_super) {
    __extends(GetForecastResultJobIdPathParams, _super);
    function GetForecastResultJobIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" }),
        __metadata("design:type", Number)
    ], GetForecastResultJobIdPathParams.prototype, "jobId", void 0);
    return GetForecastResultJobIdPathParams;
}(SpeakeasyBase));
export { GetForecastResultJobIdPathParams };
var GetForecastResultJobIdHeaders = /** @class */ (function (_super) {
    __extends(GetForecastResultJobIdHeaders, _super);
    function GetForecastResultJobIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" }),
        __metadata("design:type", String)
    ], GetForecastResultJobIdHeaders.prototype, "token", void 0);
    return GetForecastResultJobIdHeaders;
}(SpeakeasyBase));
export { GetForecastResultJobIdHeaders };
var GetForecastResultJobIdRequest = /** @class */ (function (_super) {
    __extends(GetForecastResultJobIdRequest, _super);
    function GetForecastResultJobIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetForecastResultJobIdPathParams)
    ], GetForecastResultJobIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetForecastResultJobIdHeaders)
    ], GetForecastResultJobIdRequest.prototype, "headers", void 0);
    return GetForecastResultJobIdRequest;
}(SpeakeasyBase));
export { GetForecastResultJobIdRequest };
var GetForecastResultJobIdResponse = /** @class */ (function (_super) {
    __extends(GetForecastResultJobIdResponse, _super);
    function GetForecastResultJobIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetForecastResultJobIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetForecastResultJobIdResponse.prototype, "statusCode", void 0);
    return GetForecastResultJobIdResponse;
}(SpeakeasyBase));
export { GetForecastResultJobIdResponse };
