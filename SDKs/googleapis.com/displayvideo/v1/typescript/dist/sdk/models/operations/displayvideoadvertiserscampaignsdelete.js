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
var DisplayvideoAdvertisersCampaignsDeletePathParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsDeletePathParams, _super);
    function DisplayvideoAdvertisersCampaignsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=advertiserId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeletePathParams.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaignId" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeletePathParams.prototype, "campaignId", void 0);
    return DisplayvideoAdvertisersCampaignsDeletePathParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsDeletePathParams };
var DisplayvideoAdvertisersCampaignsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsDeleteQueryParams, _super);
    function DisplayvideoAdvertisersCampaignsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DisplayvideoAdvertisersCampaignsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DisplayvideoAdvertisersCampaignsDeleteQueryParams;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsDeleteQueryParams };
var DisplayvideoAdvertisersCampaignsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsDeleteSecurityOption1, _super);
    function DisplayvideoAdvertisersCampaignsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsDeleteSecurityOption1;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsDeleteSecurityOption1 };
var DisplayvideoAdvertisersCampaignsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsDeleteSecurityOption2, _super);
    function DisplayvideoAdvertisersCampaignsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DisplayvideoAdvertisersCampaignsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DisplayvideoAdvertisersCampaignsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DisplayvideoAdvertisersCampaignsDeleteSecurityOption2;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsDeleteSecurityOption2 };
var DisplayvideoAdvertisersCampaignsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsDeleteSecurity, _super);
    function DisplayvideoAdvertisersCampaignsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsDeleteSecurityOption1)
    ], DisplayvideoAdvertisersCampaignsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsDeleteSecurityOption2)
    ], DisplayvideoAdvertisersCampaignsDeleteSecurity.prototype, "option2", void 0);
    return DisplayvideoAdvertisersCampaignsDeleteSecurity;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsDeleteSecurity };
var DisplayvideoAdvertisersCampaignsDeleteRequest = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsDeleteRequest, _super);
    function DisplayvideoAdvertisersCampaignsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsDeletePathParams)
    ], DisplayvideoAdvertisersCampaignsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsDeleteQueryParams)
    ], DisplayvideoAdvertisersCampaignsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisplayvideoAdvertisersCampaignsDeleteSecurity)
    ], DisplayvideoAdvertisersCampaignsDeleteRequest.prototype, "security", void 0);
    return DisplayvideoAdvertisersCampaignsDeleteRequest;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsDeleteRequest };
var DisplayvideoAdvertisersCampaignsDeleteResponse = /** @class */ (function (_super) {
    __extends(DisplayvideoAdvertisersCampaignsDeleteResponse, _super);
    function DisplayvideoAdvertisersCampaignsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisplayvideoAdvertisersCampaignsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DisplayvideoAdvertisersCampaignsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisplayvideoAdvertisersCampaignsDeleteResponse.prototype, "statusCode", void 0);
    return DisplayvideoAdvertisersCampaignsDeleteResponse;
}(SpeakeasyBase));
export { DisplayvideoAdvertisersCampaignsDeleteResponse };
