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
var RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams.prototype, "name", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams };
var RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams.prototype, "uploadProtocol", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams };
var RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity.prototype, "oauth2c", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity };
var RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededPathParams)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededQueryParams)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecommenderV1MarkRecommendationSucceededRequest)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededSecurity)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest.prototype, "security", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededRequest };
var RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecommenderV1Recommendation)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse.prototype, "googleCloudRecommenderV1Recommendation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse.prototype, "statusCode", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsMarkSucceededResponse };
