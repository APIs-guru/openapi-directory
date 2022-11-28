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
var DfareportingCampaignCreativeAssociationsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingCampaignCreativeAssociationsListPathParams, _super);
    function DfareportingCampaignCreativeAssociationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListPathParams.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListPathParams.prototype, "profileId", void 0);
    return DfareportingCampaignCreativeAssociationsListPathParams;
}(SpeakeasyBase));
export { DfareportingCampaignCreativeAssociationsListPathParams };
export var DfareportingCampaignCreativeAssociationsListSortOrderEnum;
(function (DfareportingCampaignCreativeAssociationsListSortOrderEnum) {
    DfareportingCampaignCreativeAssociationsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingCampaignCreativeAssociationsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingCampaignCreativeAssociationsListSortOrderEnum || (DfareportingCampaignCreativeAssociationsListSortOrderEnum = {}));
var DfareportingCampaignCreativeAssociationsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingCampaignCreativeAssociationsListQueryParams, _super);
    function DfareportingCampaignCreativeAssociationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingCampaignCreativeAssociationsListQueryParams;
}(SpeakeasyBase));
export { DfareportingCampaignCreativeAssociationsListQueryParams };
var DfareportingCampaignCreativeAssociationsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingCampaignCreativeAssociationsListSecurity, _super);
    function DfareportingCampaignCreativeAssociationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingCampaignCreativeAssociationsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingCampaignCreativeAssociationsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingCampaignCreativeAssociationsListSecurity;
}(SpeakeasyBase));
export { DfareportingCampaignCreativeAssociationsListSecurity };
var DfareportingCampaignCreativeAssociationsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingCampaignCreativeAssociationsListRequest, _super);
    function DfareportingCampaignCreativeAssociationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCampaignCreativeAssociationsListPathParams)
    ], DfareportingCampaignCreativeAssociationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCampaignCreativeAssociationsListQueryParams)
    ], DfareportingCampaignCreativeAssociationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCampaignCreativeAssociationsListSecurity)
    ], DfareportingCampaignCreativeAssociationsListRequest.prototype, "security", void 0);
    return DfareportingCampaignCreativeAssociationsListRequest;
}(SpeakeasyBase));
export { DfareportingCampaignCreativeAssociationsListRequest };
var DfareportingCampaignCreativeAssociationsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingCampaignCreativeAssociationsListResponse, _super);
    function DfareportingCampaignCreativeAssociationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CampaignCreativeAssociationsListResponse)
    ], DfareportingCampaignCreativeAssociationsListResponse.prototype, "campaignCreativeAssociationsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingCampaignCreativeAssociationsListResponse.prototype, "statusCode", void 0);
    return DfareportingCampaignCreativeAssociationsListResponse;
}(SpeakeasyBase));
export { DfareportingCampaignCreativeAssociationsListResponse };
