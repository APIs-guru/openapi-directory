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
var RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams, _super);
    function RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams.prototype, "name", void 0);
    return RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams };
var RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams, _super);
    function RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams };
var RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity, _super);
    function RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity.prototype, "oauth2c", void 0);
    return RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity };
var RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest, _super);
    function RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchPathParams)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchQueryParams)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudRecommendationengineV1beta1CatalogItem)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchSecurity)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest.prototype, "security", void 0);
    return RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchRequest };
var RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse, _super);
    function RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecommendationengineV1beta1CatalogItem)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse.prototype, "googleCloudRecommendationengineV1beta1CatalogItem", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse.prototype, "statusCode", void 0);
    return RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsCatalogItemsPatchResponse };
