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
var GetForecastTimeSeriesWrfPathParams = /** @class */ (function (_super) {
    __extends(GetForecastTimeSeriesWrfPathParams, _super);
    function GetForecastTimeSeriesWrfPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=latitude" }),
        __metadata("design:type", Number)
    ], GetForecastTimeSeriesWrfPathParams.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=longitude" }),
        __metadata("design:type", Number)
    ], GetForecastTimeSeriesWrfPathParams.prototype, "longitude", void 0);
    return GetForecastTimeSeriesWrfPathParams;
}(SpeakeasyBase));
export { GetForecastTimeSeriesWrfPathParams };
var GetForecastTimeSeriesWrfQueryParams = /** @class */ (function (_super) {
    __extends(GetForecastTimeSeriesWrfQueryParams, _super);
    function GetForecastTimeSeriesWrfQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=days" }),
        __metadata("design:type", Number)
    ], GetForecastTimeSeriesWrfQueryParams.prototype, "days", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endtime" }),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesWrfQueryParams.prototype, "endtime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entryid" }),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesWrfQueryParams.prototype, "entryid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hours" }),
        __metadata("design:type", Number)
    ], GetForecastTimeSeriesWrfQueryParams.prototype, "hours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inittime" }),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesWrfQueryParams.prototype, "inittime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=wave" }),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesWrfQueryParams.prototype, "wave", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=weather" }),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesWrfQueryParams.prototype, "weather", void 0);
    return GetForecastTimeSeriesWrfQueryParams;
}(SpeakeasyBase));
export { GetForecastTimeSeriesWrfQueryParams };
var GetForecastTimeSeriesWrfRequest = /** @class */ (function (_super) {
    __extends(GetForecastTimeSeriesWrfRequest, _super);
    function GetForecastTimeSeriesWrfRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetForecastTimeSeriesWrfPathParams)
    ], GetForecastTimeSeriesWrfRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetForecastTimeSeriesWrfQueryParams)
    ], GetForecastTimeSeriesWrfRequest.prototype, "queryParams", void 0);
    return GetForecastTimeSeriesWrfRequest;
}(SpeakeasyBase));
export { GetForecastTimeSeriesWrfRequest };
var GetForecastTimeSeriesWrfResponse = /** @class */ (function (_super) {
    __extends(GetForecastTimeSeriesWrfResponse, _super);
    function GetForecastTimeSeriesWrfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesWrfResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetForecastTimeSeriesWrfResponse.prototype, "statusCode", void 0);
    return GetForecastTimeSeriesWrfResponse;
}(SpeakeasyBase));
export { GetForecastTimeSeriesWrfResponse };
