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
var MybusinessAccountsLocationsLocalPostsReportInsightsPathParams = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsLocalPostsReportInsightsPathParams, _super);
    function MybusinessAccountsLocationsLocalPostsReportInsightsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsPathParams.prototype, "name", void 0);
    return MybusinessAccountsLocationsLocalPostsReportInsightsPathParams;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsLocalPostsReportInsightsPathParams };
var MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams, _super);
    function MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams.prototype, "uploadProtocol", void 0);
    return MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams };
var MybusinessAccountsLocationsLocalPostsReportInsightsRequest = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsLocalPostsReportInsightsRequest, _super);
    function MybusinessAccountsLocationsLocalPostsReportInsightsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessAccountsLocationsLocalPostsReportInsightsPathParams)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MybusinessAccountsLocationsLocalPostsReportInsightsQueryParams)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportLocalPostInsightsRequest)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsRequest.prototype, "request", void 0);
    return MybusinessAccountsLocationsLocalPostsReportInsightsRequest;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsLocalPostsReportInsightsRequest };
var MybusinessAccountsLocationsLocalPostsReportInsightsResponse = /** @class */ (function (_super) {
    __extends(MybusinessAccountsLocationsLocalPostsReportInsightsResponse, _super);
    function MybusinessAccountsLocationsLocalPostsReportInsightsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ReportLocalPostInsightsResponse)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsResponse.prototype, "reportLocalPostInsightsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MybusinessAccountsLocationsLocalPostsReportInsightsResponse.prototype, "statusCode", void 0);
    return MybusinessAccountsLocationsLocalPostsReportInsightsResponse;
}(SpeakeasyBase));
export { MybusinessAccountsLocationsLocalPostsReportInsightsResponse };
