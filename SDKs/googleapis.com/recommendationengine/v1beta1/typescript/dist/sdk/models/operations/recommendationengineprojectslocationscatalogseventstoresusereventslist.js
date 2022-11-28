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
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListPathParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListPathParams, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListPathParams.prototype, "parent", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListPathParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListPathParams };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams.prototype, "uploadProtocol", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity.prototype, "oauth2c", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListPathParams)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListQueryParams)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListSecurity)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest.prototype, "security", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListRequest };
var RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse = /** @class */ (function (_super) {
    __extends(RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse, _super);
    function RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecommendationengineV1beta1ListUserEventsResponse)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse.prototype, "googleCloudRecommendationengineV1beta1ListUserEventsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse.prototype, "statusCode", void 0);
    return RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse;
}(SpeakeasyBase));
export { RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsListResponse };
