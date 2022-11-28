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
var CloudchannelAccountsReportJobsFetchReportResultsPathParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsReportJobsFetchReportResultsPathParams, _super);
    function CloudchannelAccountsReportJobsFetchReportResultsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reportJob" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsPathParams.prototype, "reportJob", void 0);
    return CloudchannelAccountsReportJobsFetchReportResultsPathParams;
}(SpeakeasyBase));
export { CloudchannelAccountsReportJobsFetchReportResultsPathParams };
var CloudchannelAccountsReportJobsFetchReportResultsQueryParams = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsReportJobsFetchReportResultsQueryParams, _super);
    function CloudchannelAccountsReportJobsFetchReportResultsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudchannelAccountsReportJobsFetchReportResultsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudchannelAccountsReportJobsFetchReportResultsQueryParams;
}(SpeakeasyBase));
export { CloudchannelAccountsReportJobsFetchReportResultsQueryParams };
var CloudchannelAccountsReportJobsFetchReportResultsSecurity = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsReportJobsFetchReportResultsSecurity, _super);
    function CloudchannelAccountsReportJobsFetchReportResultsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudchannelAccountsReportJobsFetchReportResultsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudchannelAccountsReportJobsFetchReportResultsSecurity.prototype, "oauth2c", void 0);
    return CloudchannelAccountsReportJobsFetchReportResultsSecurity;
}(SpeakeasyBase));
export { CloudchannelAccountsReportJobsFetchReportResultsSecurity };
var CloudchannelAccountsReportJobsFetchReportResultsRequest = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsReportJobsFetchReportResultsRequest, _super);
    function CloudchannelAccountsReportJobsFetchReportResultsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsReportJobsFetchReportResultsPathParams)
    ], CloudchannelAccountsReportJobsFetchReportResultsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsReportJobsFetchReportResultsQueryParams)
    ], CloudchannelAccountsReportJobsFetchReportResultsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudChannelV1FetchReportResultsRequest)
    ], CloudchannelAccountsReportJobsFetchReportResultsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudchannelAccountsReportJobsFetchReportResultsSecurity)
    ], CloudchannelAccountsReportJobsFetchReportResultsRequest.prototype, "security", void 0);
    return CloudchannelAccountsReportJobsFetchReportResultsRequest;
}(SpeakeasyBase));
export { CloudchannelAccountsReportJobsFetchReportResultsRequest };
var CloudchannelAccountsReportJobsFetchReportResultsResponse = /** @class */ (function (_super) {
    __extends(CloudchannelAccountsReportJobsFetchReportResultsResponse, _super);
    function CloudchannelAccountsReportJobsFetchReportResultsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudchannelAccountsReportJobsFetchReportResultsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudChannelV1FetchReportResultsResponse)
    ], CloudchannelAccountsReportJobsFetchReportResultsResponse.prototype, "googleCloudChannelV1FetchReportResultsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudchannelAccountsReportJobsFetchReportResultsResponse.prototype, "statusCode", void 0);
    return CloudchannelAccountsReportJobsFetchReportResultsResponse;
}(SpeakeasyBase));
export { CloudchannelAccountsReportJobsFetchReportResultsResponse };
