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
var PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams, _super);
    function PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams.prototype, "name", void 0);
    return PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams };
var PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams, _super);
    function PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams.prototype, "uploadProtocol", void 0);
    return PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams };
var PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest, _super);
    function PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryPathParams)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryQueryParams)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetRequest)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest.prototype, "request", void 0);
    return PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest };
var PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse, _super);
    function PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse.prototype, "googlePlayDeveloperReportingV1beta1QueryStuckBackgroundWakelockRateMetricSetResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse.prototype, "statusCode", void 0);
    return PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse };
