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
var DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams, _super);
    function DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams.prototype, "campaignId", void 0);
    return DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams };
var DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams, _super);
    function DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams };
var DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity, _super);
    function DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity };
var DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest, _super);
    function DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest };
var DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse, _super);
    function DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BulkListCampaignAssignedTargetingOptionsResponse)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse.prototype, "bulkListCampaignAssignedTargetingOptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse };
