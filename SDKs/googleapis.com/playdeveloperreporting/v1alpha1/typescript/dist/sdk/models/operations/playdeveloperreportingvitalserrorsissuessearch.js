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
var PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams, _super);
    function PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams.prototype, "parent", void 0);
    return PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams };
var PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams, _super);
    function PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.day" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalEndTimeDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.hours" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalEndTimeHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.minutes" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalEndTimeMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.month" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalEndTimeMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.nanos" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalEndTimeNanos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.seconds" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalEndTimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.timeZone.id" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalEndTimeTimeZoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.timeZone.version" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalEndTimeTimeZoneVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.utcOffset" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalEndTimeUtcOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime.year" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalEndTimeYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.day" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalStartTimeDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.hours" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalStartTimeHours", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.minutes" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalStartTimeMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.month" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalStartTimeMonth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.nanos" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalStartTimeNanos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.seconds" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalStartTimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.timeZone.id" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalStartTimeTimeZoneId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.timeZone.version" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalStartTimeTimeZoneVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.utcOffset" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalStartTimeUtcOffset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime.year" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "intervalStartTimeYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams.prototype, "uploadProtocol", void 0);
    return PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams };
var PlaydeveloperreportingVitalsErrorsIssuesSearchRequest = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsErrorsIssuesSearchRequest, _super);
    function PlaydeveloperreportingVitalsErrorsIssuesSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaydeveloperreportingVitalsErrorsIssuesSearchPathParams)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaydeveloperreportingVitalsErrorsIssuesSearchQueryParams)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchRequest.prototype, "queryParams", void 0);
    return PlaydeveloperreportingVitalsErrorsIssuesSearchRequest;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsErrorsIssuesSearchRequest };
var PlaydeveloperreportingVitalsErrorsIssuesSearchResponse = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsErrorsIssuesSearchResponse, _super);
    function PlaydeveloperreportingVitalsErrorsIssuesSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchResponse.prototype, "googlePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsErrorsIssuesSearchResponse.prototype, "statusCode", void 0);
    return PlaydeveloperreportingVitalsErrorsIssuesSearchResponse;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsErrorsIssuesSearchResponse };
