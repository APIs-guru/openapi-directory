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
var RecommenderProjectsLocationsRecommendersRecommendationsListPathParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsListPathParams, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListPathParams.prototype, "parent", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsListPathParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsListPathParams };
var RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams.prototype, "uploadProtocol", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams };
var RecommenderProjectsLocationsRecommendersRecommendationsListSecurity = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsListSecurity, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListSecurity.prototype, "oauth2c", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsListSecurity;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsListSecurity };
var RecommenderProjectsLocationsRecommendersRecommendationsListRequest = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsListRequest, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersRecommendationsListPathParams)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersRecommendationsListQueryParams)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RecommenderProjectsLocationsRecommendersRecommendationsListSecurity)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListRequest.prototype, "security", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsListRequest;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsListRequest };
var RecommenderProjectsLocationsRecommendersRecommendationsListResponse = /** @class */ (function (_super) {
    __extends(RecommenderProjectsLocationsRecommendersRecommendationsListResponse, _super);
    function RecommenderProjectsLocationsRecommendersRecommendationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudRecommenderV1ListRecommendationsResponse)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListResponse.prototype, "googleCloudRecommenderV1ListRecommendationsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RecommenderProjectsLocationsRecommendersRecommendationsListResponse.prototype, "statusCode", void 0);
    return RecommenderProjectsLocationsRecommendersRecommendationsListResponse;
}(SpeakeasyBase));
export { RecommenderProjectsLocationsRecommendersRecommendationsListResponse };
