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
var DisplayvideoAdvertisersCampaignsGetPathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsGetPathParams, _super);
    function DisplayvideoAdvertisersCampaignsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetPathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetPathParams.prototype, "campaignId", void 0);
    return DisplayvideoAdvertisersCampaignsGetPathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsGetPathParams };
var DisplayvideoAdvertisersCampaignsGetQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsGetQueryParams, _super);
    function DisplayvideoAdvertisersCampaignsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersCampaignsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersCampaignsGetQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsGetQueryParams };
var DisplayvideoAdvertisersCampaignsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsGetSecurityOption1, _super);
    function DisplayvideoAdvertisersCampaignsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsGetSecurityOption1;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsGetSecurityOption1 };
var DisplayvideoAdvertisersCampaignsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsGetSecurityOption2, _super);
    function DisplayvideoAdvertisersCampaignsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsGetSecurityOption2;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsGetSecurityOption2 };
var DisplayvideoAdvertisersCampaignsGetSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsGetSecurity, _super);
    function DisplayvideoAdvertisersCampaignsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsGetSecurityOption1)
    ], DisplayvideoAdvertisersCampaignsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsGetSecurityOption2)
    ], DisplayvideoAdvertisersCampaignsGetSecurity.prototype, "option2", void 0);
    return DisplayvideoAdvertisersCampaignsGetSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsGetSecurity };
var DisplayvideoAdvertisersCampaignsGetRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsGetRequest, _super);
    function DisplayvideoAdvertisersCampaignsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsGetPathParams)
    ], DisplayvideoAdvertisersCampaignsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsGetQueryParams)
    ], DisplayvideoAdvertisersCampaignsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsGetSecurity)
    ], DisplayvideoAdvertisersCampaignsGetRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersCampaignsGetRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsGetRequest };
var DisplayvideoAdvertisersCampaignsGetResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsGetResponse, _super);
    function DisplayvideoAdvertisersCampaignsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Campaign)
    ], DisplayvideoAdvertisersCampaignsGetResponse.prototype, "campaign", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersCampaignsGetResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersCampaignsGetResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsGetResponse };
