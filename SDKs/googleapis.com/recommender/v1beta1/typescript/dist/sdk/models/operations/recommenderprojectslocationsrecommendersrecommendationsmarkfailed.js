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
var RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedPathParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedPathParams, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedPathParams.prototype, "name", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedPathParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedPathParams };
var RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams.prototype, "uploadProtocol", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams };
var RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity.prototype, "oauth2c", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity };
var RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedPathParams)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedQueryParams)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecommenderV1beta1MarkRecommendationFailedRequest)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedSecurity)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest.prototype, "security", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedRequest };
var RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecommenderV1beta1Recommendation)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse.prototype, "googleCloudRecommenderV1beta1Recommendation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse.prototype, "statusCode", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsMarkFailedResponse };
