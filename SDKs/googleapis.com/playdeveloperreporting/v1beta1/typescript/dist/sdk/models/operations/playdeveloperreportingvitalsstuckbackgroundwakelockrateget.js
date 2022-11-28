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
var PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetPathParams = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetPathParams, _super);
    function PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetPathParams.prototype, "name", void 0);
    return PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetPathParams;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetPathParams };
var PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams, _super);
    function PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams.prototype, "uploadProtocol", void 0);
    return PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams };
var PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest, _super);
    function PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetPathParams)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetQueryParams)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest.prototype, "queryParams", void 0);
    return PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest };
var PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse, _super);
    function PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse.prototype, "googlePlayDeveloperReportingV1beta1StuckBackgroundWakelockRateMetricSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse.prototype, "statusCode", void 0);
    return PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse;
}(SpeakeasyBase));
export { PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse };
