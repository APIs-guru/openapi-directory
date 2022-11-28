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
var DisplayvideoAdvertisersCampaignsPatchPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsPatchPathParams, _super);
    function DisplayvideoAdvertisersCampaignsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchPathParams.prototype, "campaignId", void 0);
    return DisplayvideoAdvertisersCampaignsPatchPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsPatchPathParams };
var DisplayvideoAdvertisersCampaignsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsPatchQueryParams, _super);
    function DisplayvideoAdvertisersCampaignsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersCampaignsPatchQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsPatchQueryParams };
var DisplayvideoAdvertisersCampaignsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsPatchSecurityOption1, _super);
    function DisplayvideoAdvertisersCampaignsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsPatchSecurityOption1;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsPatchSecurityOption1 };
var DisplayvideoAdvertisersCampaignsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsPatchSecurityOption2, _super);
    function DisplayvideoAdvertisersCampaignsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsPatchSecurityOption2;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsPatchSecurityOption2 };
var DisplayvideoAdvertisersCampaignsPatchSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsPatchSecurity, _super);
    function DisplayvideoAdvertisersCampaignsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsPatchSecurityOption1)
    ], DisplayvideoAdvertisersCampaignsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsPatchSecurityOption2)
    ], DisplayvideoAdvertisersCampaignsPatchSecurity.prototype, "option2", void 0);
    return DisplayvideoAdvertisersCampaignsPatchSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsPatchSecurity };
var DisplayvideoAdvertisersCampaignsPatchRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsPatchRequest, _super);
    function DisplayvideoAdvertisersCampaignsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsPatchPathParams)
    ], DisplayvideoAdvertisersCampaignsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsPatchQueryParams)
    ], DisplayvideoAdvertisersCampaignsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CampaignInput)
    ], DisplayvideoAdvertisersCampaignsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsPatchSecurity)
    ], DisplayvideoAdvertisersCampaignsPatchRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersCampaignsPatchRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsPatchRequest };
var DisplayvideoAdvertisersCampaignsPatchResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsPatchResponse, _super);
    function DisplayvideoAdvertisersCampaignsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Campaign)
    ], DisplayvideoAdvertisersCampaignsPatchResponse.prototype, "campaign", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersCampaignsPatchResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersCampaignsPatchResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsPatchResponse };
