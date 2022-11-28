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
var DisplayvideoAdvertisersCampaignsCreatePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsCreatePathParams, _super);
    function DisplayvideoAdvertisersCampaignsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreatePathParams.prototype, "advertiserId", void 0);
    return DisplayvideoAdvertisersCampaignsCreatePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsCreatePathParams };
var DisplayvideoAdvertisersCampaignsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsCreateQueryParams, _super);
    function DisplayvideoAdvertisersCampaignsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersCampaignsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersCampaignsCreateQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsCreateQueryParams };
var DisplayvideoAdvertisersCampaignsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsCreateSecurityOption1, _super);
    function DisplayvideoAdvertisersCampaignsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsCreateSecurityOption1;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsCreateSecurityOption1 };
var DisplayvideoAdvertisersCampaignsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsCreateSecurityOption2, _super);
    function DisplayvideoAdvertisersCampaignsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsCreateSecurityOption2;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsCreateSecurityOption2 };
var DisplayvideoAdvertisersCampaignsCreateSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsCreateSecurity, _super);
    function DisplayvideoAdvertisersCampaignsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsCreateSecurityOption1)
    ], DisplayvideoAdvertisersCampaignsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsCreateSecurityOption2)
    ], DisplayvideoAdvertisersCampaignsCreateSecurity.prototype, "option2", void 0);
    return DisplayvideoAdvertisersCampaignsCreateSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsCreateSecurity };
var DisplayvideoAdvertisersCampaignsCreateRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsCreateRequest, _super);
    function DisplayvideoAdvertisersCampaignsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsCreatePathParams)
    ], DisplayvideoAdvertisersCampaignsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsCreateQueryParams)
    ], DisplayvideoAdvertisersCampaignsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CampaignInput)
    ], DisplayvideoAdvertisersCampaignsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsCreateSecurity)
    ], DisplayvideoAdvertisersCampaignsCreateRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersCampaignsCreateRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsCreateRequest };
var DisplayvideoAdvertisersCampaignsCreateResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsCreateResponse, _super);
    function DisplayvideoAdvertisersCampaignsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Campaign)
    ], DisplayvideoAdvertisersCampaignsCreateResponse.prototype, "campaign", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersCampaignsCreateResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersCampaignsCreateResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsCreateResponse };
