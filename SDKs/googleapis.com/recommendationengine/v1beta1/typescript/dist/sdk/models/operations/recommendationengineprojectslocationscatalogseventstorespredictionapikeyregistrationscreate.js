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
var RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams.prototype, "parent", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams };
var RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams };
var RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity.prototype, "oauth2c", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity };
var RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreatePathParams)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateQueryParams)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecommendationengineV1beta1CreatePredictionApiKeyRegistrationRequest)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateSecurity)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest.prototype, "security", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateRequest };
var RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecommendationengineV1beta1PredictionApiKeyRegistration)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse.prototype, "googleCloudRecommendationengineV1beta1PredictionApiKeyRegistration", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse.prototype, "statusCode", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreateResponse };
