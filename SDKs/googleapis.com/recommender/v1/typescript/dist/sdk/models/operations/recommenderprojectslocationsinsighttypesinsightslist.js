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
var RecommenderProjectsLocationsInsightTypesInsightsListPathParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsInsightTypesInsightsListPathParams, _super);
    function RecommenderProjectsLocationsInsightTypesInsightsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListPathParams.prototype, "parent", void 0);
    return RecommenderProjectsLocationsInsightTypesInsightsListPathParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsInsightTypesInsightsListPathParams };
var RecommenderProjectsLocationsInsightTypesInsightsListQueryParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsInsightTypesInsightsListQueryParams, _super);
    function RecommenderProjectsLocationsInsightTypesInsightsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListQueryParams.prototype, "uploadProtocol", void 0);
    return RecommenderProjectsLocationsInsightTypesInsightsListQueryParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsInsightTypesInsightsListQueryParams };
var RecommenderProjectsLocationsInsightTypesInsightsListSecurity = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsInsightTypesInsightsListSecurity, _super);
    function RecommenderProjectsLocationsInsightTypesInsightsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommenderProjectsLocationsInsightTypesInsightsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommenderProjectsLocationsInsightTypesInsightsListSecurity.prototype, "oauth2c", void 0);
    return RecommenderProjectsLocationsInsightTypesInsightsListSecurity;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsInsightTypesInsightsListSecurity };
var RecommenderProjectsLocationsInsightTypesInsightsListRequest = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsInsightTypesInsightsListRequest, _super);
    function RecommenderProjectsLocationsInsightTypesInsightsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsInsightTypesInsightsListPathParams)
    ], RecommenderProjectsLocationsInsightTypesInsightsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsInsightTypesInsightsListQueryParams)
    ], RecommenderProjectsLocationsInsightTypesInsightsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsInsightTypesInsightsListSecurity)
    ], RecommenderProjectsLocationsInsightTypesInsightsListRequest.prototype, "security", void 0);
    return RecommenderProjectsLocationsInsightTypesInsightsListRequest;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsInsightTypesInsightsListRequest };
var RecommenderProjectsLocationsInsightTypesInsightsListResponse = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsInsightTypesInsightsListResponse, _super);
    function RecommenderProjectsLocationsInsightTypesInsightsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecommenderV1ListInsightsResponse)
    ], RecommenderProjectsLocationsInsightTypesInsightsListResponse.prototype, "googleCloudRecommenderV1ListInsightsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommenderProjectsLocationsInsightTypesInsightsListResponse.prototype, "statusCode", void 0);
    return RecommenderProjectsLocationsInsightTypesInsightsListResponse;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsInsightTypesInsightsListResponse };
