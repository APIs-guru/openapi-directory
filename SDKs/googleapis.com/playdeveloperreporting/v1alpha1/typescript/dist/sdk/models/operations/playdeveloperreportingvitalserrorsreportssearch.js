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
var PlaydeveloperreportingVitalsErrorsReportsSearchPathParams = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsErrorsReportsSearchPathParams, _super);
    function PlaydeveloperreportingVitalsErrorsReportsSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchPathParams.prototype, "parent", void 0);
    return PlaydeveloperreportingVitalsErrorsReportsSearchPathParams;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsErrorsReportsSearchPathParams };
var PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams, _super);
    function PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.day" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalEndTimeDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.hours" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalEndTimeHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.minutes" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalEndTimeMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.month" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalEndTimeMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.nanos" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalEndTimeNanos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.seconds" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalEndTimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.timeZone.id" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalEndTimeTimeZoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.timeZone.version" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalEndTimeTimeZoneVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.utcOffset" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalEndTimeUtcOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.year" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalEndTimeYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.day" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalStartTimeDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.hours" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalStartTimeHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.minutes" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalStartTimeMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.month" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalStartTimeMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.nanos" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalStartTimeNanos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.seconds" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalStartTimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.timeZone.id" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalStartTimeTimeZoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.timeZone.version" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalStartTimeTimeZoneVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.utcOffset" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalStartTimeUtcOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.year" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "intervalStartTimeYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams };
var PlaydeveloperreportingVitalsErrorsReportsSearchRequest = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsErrorsReportsSearchRequest, _super);
    function PlaydeveloperreportingVitalsErrorsReportsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaydeveloperreportingVitalsErrorsReportsSearchPathParams)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaydeveloperreportingVitalsErrorsReportsSearchQueryParams)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchRequest.prototype, "queryParams", void 0);
    return PlaydeveloperreportingVitalsErrorsReportsSearchRequest;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsErrorsReportsSearchRequest };
var PlaydeveloperreportingVitalsErrorsReportsSearchResponse = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsErrorsReportsSearchResponse, _super);
    function PlaydeveloperreportingVitalsErrorsReportsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchResponse.prototype, "googlePlayDeveloperReportingV1alpha1SearchErrorReportsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsReportsSearchResponse.prototype, "statusCode", void 0);
    return PlaydeveloperreportingVitalsErrorsReportsSearchResponse;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsErrorsReportsSearchResponse };
