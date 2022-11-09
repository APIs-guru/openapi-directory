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
var GetForecastTimeSeriesPathParams = /** @class */ (function (_super) {
    __extends(GetForecastTimeSeriesPathParams, _super);
    function GetForecastTimeSeriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=latitude" }),
        __metadata("design:type", Number)
    ], GetForecastTimeSeriesPathParams.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=longitude" }),
        __metadata("design:type", Number)
    ], GetForecastTimeSeriesPathParams.prototype, "longitude", void 0);
    return GetForecastTimeSeriesPathParams;
}(SpeakeasyBase));
export { GetForecastTimeSeriesPathParams };
var GetForecastTimeSeriesQueryParams = /** @class */ (function (_super) {
    __extends(GetForecastTimeSeriesQueryParams, _super);
    function GetForecastTimeSeriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=days" }),
        __metadata("design:type", Number)
    ], GetForecastTimeSeriesQueryParams.prototype, "days", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endtime" }),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesQueryParams.prototype, "endtime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=entryid" }),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesQueryParams.prototype, "entryid", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=hours" }),
        __metadata("design:type", Number)
    ], GetForecastTimeSeriesQueryParams.prototype, "hours", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=inittime" }),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesQueryParams.prototype, "inittime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=wave" }),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesQueryParams.prototype, "wave", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=weather" }),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesQueryParams.prototype, "weather", void 0);
    return GetForecastTimeSeriesQueryParams;
}(SpeakeasyBase));
export { GetForecastTimeSeriesQueryParams };
var GetForecastTimeSeriesRequest = /** @class */ (function (_super) {
    __extends(GetForecastTimeSeriesRequest, _super);
    function GetForecastTimeSeriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetForecastTimeSeriesPathParams)
    ], GetForecastTimeSeriesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetForecastTimeSeriesQueryParams)
    ], GetForecastTimeSeriesRequest.prototype, "queryParams", void 0);
    return GetForecastTimeSeriesRequest;
}(SpeakeasyBase));
export { GetForecastTimeSeriesRequest };
var GetForecastTimeSeriesResponse = /** @class */ (function (_super) {
    __extends(GetForecastTimeSeriesResponse, _super);
    function GetForecastTimeSeriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetForecastTimeSeriesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetForecastTimeSeriesResponse.prototype, "statusCode", void 0);
    return GetForecastTimeSeriesResponse;
}(SpeakeasyBase));
export { GetForecastTimeSeriesResponse };
