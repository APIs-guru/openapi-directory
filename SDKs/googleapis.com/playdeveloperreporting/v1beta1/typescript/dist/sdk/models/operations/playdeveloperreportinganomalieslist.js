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
var PlaydeveloperreportingAnomaliesListPathParams = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingAnomaliesListPathParams, _super);
    function PlaydeveloperreportingAnomaliesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListPathParams.prototype, "parent", void 0);
    return PlaydeveloperreportingAnomaliesListPathParams;
}(SpeakeasyBase));
export { PlaydeveloperreportingAnomaliesListPathParams };
var PlaydeveloperreportingAnomaliesListQueryParams = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingAnomaliesListQueryParams, _super);
    function PlaydeveloperreportingAnomaliesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListQueryParams.prototype, "uploadProtocol", void 0);
    return PlaydeveloperreportingAnomaliesListQueryParams;
}(SpeakeasyBase));
export { PlaydeveloperreportingAnomaliesListQueryParams };
var PlaydeveloperreportingAnomaliesListRequest = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingAnomaliesListRequest, _super);
    function PlaydeveloperreportingAnomaliesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaydeveloperreportingAnomaliesListPathParams)
    ], PlaydeveloperreportingAnomaliesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PlaydeveloperreportingAnomaliesListQueryParams)
    ], PlaydeveloperreportingAnomaliesListRequest.prototype, "queryParams", void 0);
    return PlaydeveloperreportingAnomaliesListRequest;
}(SpeakeasyBase));
export { PlaydeveloperreportingAnomaliesListRequest };
var PlaydeveloperreportingAnomaliesListResponse = /** @class */ (function (_super) {
    __extends(PlaydeveloperreportingAnomaliesListResponse, _super);
    function PlaydeveloperreportingAnomaliesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PlaydeveloperreportingAnomaliesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GooglePlayDeveloperReportingV1beta1ListAnomaliesResponse)
    ], PlaydeveloperreportingAnomaliesListResponse.prototype, "googlePlayDeveloperReportingV1beta1ListAnomaliesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PlaydeveloperreportingAnomaliesListResponse.prototype, "statusCode", void 0);
    return PlaydeveloperreportingAnomaliesListResponse;
}(SpeakeasyBase));
export { PlaydeveloperreportingAnomaliesListResponse };
