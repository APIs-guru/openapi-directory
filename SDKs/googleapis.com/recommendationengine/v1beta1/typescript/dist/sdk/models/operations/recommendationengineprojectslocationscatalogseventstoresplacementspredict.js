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
var RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams.prototype, "name", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams };
var RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams.prototype, "uploadProtocol", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams };
var RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity.prototype, "oauth2c", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity };
var RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictPathParams)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictQueryParams)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecommendationengineV1beta1PredictRequest)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictSecurity)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest.prototype, "security", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictRequest };
var RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecommendationengineV1beta1PredictResponse)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse.prototype, "googleCloudRecommendationengineV1beta1PredictResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse.prototype, "statusCode", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredictResponse };
