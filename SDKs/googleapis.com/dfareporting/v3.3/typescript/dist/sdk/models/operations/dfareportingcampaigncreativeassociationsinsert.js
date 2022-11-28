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
var DfareportingCampaignCreativeAssociationsInsertPathParams = /** @class */ (function (_super) {
    __extends(DfareportingCampaignCreativeAssociationsInsertPathParams, _super);
    function DfareportingCampaignCreativeAssociationsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertPathParams.prototype, "campaignId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertPathParams.prototype, "profileId", void 0);
    return DfareportingCampaignCreativeAssociationsInsertPathParams;
}(SpeakeasyBase));
export { DfareportingCampaignCreativeAssociationsInsertPathParams };
var DfareportingCampaignCreativeAssociationsInsertQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingCampaignCreativeAssociationsInsertQueryParams, _super);
    function DfareportingCampaignCreativeAssociationsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingCampaignCreativeAssociationsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingCampaignCreativeAssociationsInsertQueryParams;
}(SpeakeasyBase));
export { DfareportingCampaignCreativeAssociationsInsertQueryParams };
var DfareportingCampaignCreativeAssociationsInsertSecurity = /** @class */ (function (_super) {
    __extends(DfareportingCampaignCreativeAssociationsInsertSecurity, _super);
    function DfareportingCampaignCreativeAssociationsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingCampaignCreativeAssociationsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingCampaignCreativeAssociationsInsertSecurity.prototype, "oauth2c", void 0);
    return DfareportingCampaignCreativeAssociationsInsertSecurity;
}(SpeakeasyBase));
export { DfareportingCampaignCreativeAssociationsInsertSecurity };
var DfareportingCampaignCreativeAssociationsInsertRequest = /** @class */ (function (_super) {
    __extends(DfareportingCampaignCreativeAssociationsInsertRequest, _super);
    function DfareportingCampaignCreativeAssociationsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCampaignCreativeAssociationsInsertPathParams)
    ], DfareportingCampaignCreativeAssociationsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCampaignCreativeAssociationsInsertQueryParams)
    ], DfareportingCampaignCreativeAssociationsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CampaignCreativeAssociation)
    ], DfareportingCampaignCreativeAssociationsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingCampaignCreativeAssociationsInsertSecurity)
    ], DfareportingCampaignCreativeAssociationsInsertRequest.prototype, "security", void 0);
    return DfareportingCampaignCreativeAssociationsInsertRequest;
}(SpeakeasyBase));
export { DfareportingCampaignCreativeAssociationsInsertRequest };
var DfareportingCampaignCreativeAssociationsInsertResponse = /** @class */ (function (_super) {
    __extends(DfareportingCampaignCreativeAssociationsInsertResponse, _super);
    function DfareportingCampaignCreativeAssociationsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CampaignCreativeAssociation)
    ], DfareportingCampaignCreativeAssociationsInsertResponse.prototype, "campaignCreativeAssociation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingCampaignCreativeAssociationsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingCampaignCreativeAssociationsInsertResponse.prototype, "statusCode", void 0);
    return DfareportingCampaignCreativeAssociationsInsertResponse;
}(SpeakeasyBase));
export { DfareportingCampaignCreativeAssociationsInsertResponse };
