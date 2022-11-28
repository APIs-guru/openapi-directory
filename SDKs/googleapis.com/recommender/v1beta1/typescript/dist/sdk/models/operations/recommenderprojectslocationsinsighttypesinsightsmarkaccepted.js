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
var RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams, _super);
    function RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams.prototype, "name", void 0);
    return RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams };
var RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams, _super);
    function RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams.prototype, "uploadProtocol", void 0);
    return RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams };
var RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity, _super);
    function RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity.prototype, "oauth2c", void 0);
    return RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity };
var RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest, _super);
    function RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedPathParams)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedQueryParams)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecommenderV1beta1MarkInsightAcceptedRequest)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedSecurity)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest.prototype, "security", void 0);
    return RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedRequest };
var RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse, _super);
    function RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecommenderV1beta1Insight)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse.prototype, "googleCloudRecommenderV1beta1Insight", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse.prototype, "statusCode", void 0);
    return RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsInsightTypesInsightsMarkAcceptedResponse };
