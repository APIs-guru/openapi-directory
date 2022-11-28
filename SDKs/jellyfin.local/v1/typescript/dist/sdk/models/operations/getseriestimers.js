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
var GetSeriesTimersQueryParams = /** @class */ (function (_super) {
    __extends(GetSeriesTimersQueryParams, _super);
    function GetSeriesTimersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortBy" }),
        __metadata("design:type", String)
    ], GetSeriesTimersQueryParams.prototype, "sortBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], GetSeriesTimersQueryParams.prototype, "sortOrder", void 0);
    return GetSeriesTimersQueryParams;
}(SpeakeasyBase));
export { GetSeriesTimersQueryParams };
var GetSeriesTimersSecurity = /** @class */ (function (_super) {
    __extends(GetSeriesTimersSecurity, _super);
    function GetSeriesTimersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetSeriesTimersSecurity.prototype, "customAuthentication", void 0);
    return GetSeriesTimersSecurity;
}(SpeakeasyBase));
export { GetSeriesTimersSecurity };
var GetSeriesTimersRequest = /** @class */ (function (_super) {
    __extends(GetSeriesTimersRequest, _super);
    function GetSeriesTimersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesTimersQueryParams)
    ], GetSeriesTimersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSeriesTimersSecurity)
    ], GetSeriesTimersRequest.prototype, "security", void 0);
    return GetSeriesTimersRequest;
}(SpeakeasyBase));
export { GetSeriesTimersRequest };
var GetSeriesTimersResponse = /** @class */ (function (_super) {
    __extends(GetSeriesTimersResponse, _super);
    function GetSeriesTimersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSeriesTimersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SeriesTimerInfoDtoQueryResult)
    ], GetSeriesTimersResponse.prototype, "seriesTimerInfoDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSeriesTimersResponse.prototype, "statusCode", void 0);
    return GetSeriesTimersResponse;
}(SpeakeasyBase));
export { GetSeriesTimersResponse };
