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
var QualityGetDailyDataQualityForSitePathParams = /** @class */ (function (_super) {
    __extends(QualityGetDailyDataQualityForSitePathParams, _super);
    function QualityGetDailyDataQualityForSitePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], QualityGetDailyDataQualityForSitePathParams.prototype, "version", void 0);
    return QualityGetDailyDataQualityForSitePathParams;
}(SpeakeasyBase));
export { QualityGetDailyDataQualityForSitePathParams };
var QualityGetDailyDataQualityForSiteQueryParams = /** @class */ (function (_super) {
    __extends(QualityGetDailyDataQualityForSiteQueryParams, _super);
    function QualityGetDailyDataQualityForSiteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], QualityGetDailyDataQualityForSiteQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteId" }),
        __metadata("design:type", String)
    ], QualityGetDailyDataQualityForSiteQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], QualityGetDailyDataQualityForSiteQueryParams.prototype, "startDate", void 0);
    return QualityGetDailyDataQualityForSiteQueryParams;
}(SpeakeasyBase));
export { QualityGetDailyDataQualityForSiteQueryParams };
var QualityGetDailyDataQualityForSiteRequest = /** @class */ (function (_super) {
    __extends(QualityGetDailyDataQualityForSiteRequest, _super);
    function QualityGetDailyDataQualityForSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QualityGetDailyDataQualityForSitePathParams)
    ], QualityGetDailyDataQualityForSiteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QualityGetDailyDataQualityForSiteQueryParams)
    ], QualityGetDailyDataQualityForSiteRequest.prototype, "queryParams", void 0);
    return QualityGetDailyDataQualityForSiteRequest;
}(SpeakeasyBase));
export { QualityGetDailyDataQualityForSiteRequest };
var QualityGetDailyDataQualityForSiteResponse = /** @class */ (function (_super) {
    __extends(QualityGetDailyDataQualityForSiteResponse, _super);
    function QualityGetDailyDataQualityForSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QualityGetDailyDataQualityForSiteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DailyQualityResponse)
    ], QualityGetDailyDataQualityForSiteResponse.prototype, "dailyQualityResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QualityGetDailyDataQualityForSiteResponse.prototype, "statusCode", void 0);
    return QualityGetDailyDataQualityForSiteResponse;
}(SpeakeasyBase));
export { QualityGetDailyDataQualityForSiteResponse };
