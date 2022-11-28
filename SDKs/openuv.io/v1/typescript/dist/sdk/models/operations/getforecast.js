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
import * as shared from "../shared";
var GetForecastQueryParams = /** @class */ (function (_super) {
    __extends(GetForecastQueryParams, _super);
    function GetForecastQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", Number)
    ], GetForecastQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dt" }),
        __metadata("design:type", Date)
    ], GetForecastQueryParams.prototype, "dt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lat" }),
        __metadata("design:type", Number)
    ], GetForecastQueryParams.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lng" }),
        __metadata("design:type", Number)
    ], GetForecastQueryParams.prototype, "lng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ozone" }),
        __metadata("design:type", Number)
    ], GetForecastQueryParams.prototype, "ozone", void 0);
    return GetForecastQueryParams;
}(SpeakeasyBase));
export { GetForecastQueryParams };
var GetForecastHeaders = /** @class */ (function (_super) {
    __extends(GetForecastHeaders, _super);
    function GetForecastHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-access-token" }),
        __metadata("design:type", String)
    ], GetForecastHeaders.prototype, "xAccessToken", void 0);
    return GetForecastHeaders;
}(SpeakeasyBase));
export { GetForecastHeaders };
var GetForecastRequest = /** @class */ (function (_super) {
    __extends(GetForecastRequest, _super);
    function GetForecastRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetForecastQueryParams)
    ], GetForecastRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetForecastHeaders)
    ], GetForecastRequest.prototype, "headers", void 0);
    return GetForecastRequest;
}(SpeakeasyBase));
export { GetForecastRequest };
var GetForecastResponse = /** @class */ (function (_super) {
    __extends(GetForecastResponse, _super);
    function GetForecastResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetForecastResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetForecastResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Forecast, elemDepth: 2 }),
        __metadata("design:type", Array)
    ], GetForecastResponse.prototype, "forecastResults", void 0);
    return GetForecastResponse;
}(SpeakeasyBase));
export { GetForecastResponse };
