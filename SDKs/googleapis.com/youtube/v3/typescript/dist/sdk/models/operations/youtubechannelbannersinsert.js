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
var YoutubeChannelBannersInsertQueryParams = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertQueryParams, _super);
    function YoutubeChannelBannersInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwner" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "onBehalfOfContentOwner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onBehalfOfContentOwnerChannel" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "onBehalfOfContentOwnerChannel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertQueryParams.prototype, "uploadProtocol", void 0);
    return YoutubeChannelBannersInsertQueryParams;
}(SpeakeasyBase));
export { YoutubeChannelBannersInsertQueryParams };
var YoutubeChannelBannersInsertRequests = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertRequests, _super);
    function YoutubeChannelBannersInsertRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/octet-stream" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeChannelBannersInsertRequests.prototype, "applicationOctetStream", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/jpeg" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeChannelBannersInsertRequests.prototype, "imageJpeg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=image/png" }),
        __metadata("design:type", Uint8Array)
    ], YoutubeChannelBannersInsertRequests.prototype, "imagePng", void 0);
    return YoutubeChannelBannersInsertRequests;
}(SpeakeasyBase));
export { YoutubeChannelBannersInsertRequests };
var YoutubeChannelBannersInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertSecurityOption1, _super);
    function YoutubeChannelBannersInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelBannersInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelBannersInsertSecurityOption1.prototype, "oauth2c", void 0);
    return YoutubeChannelBannersInsertSecurityOption1;
}(SpeakeasyBase));
export { YoutubeChannelBannersInsertSecurityOption1 };
var YoutubeChannelBannersInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertSecurityOption2, _super);
    function YoutubeChannelBannersInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelBannersInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelBannersInsertSecurityOption2.prototype, "oauth2c", void 0);
    return YoutubeChannelBannersInsertSecurityOption2;
}(SpeakeasyBase));
export { YoutubeChannelBannersInsertSecurityOption2 };
var YoutubeChannelBannersInsertSecurityOption3 = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertSecurityOption3, _super);
    function YoutubeChannelBannersInsertSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], YoutubeChannelBannersInsertSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], YoutubeChannelBannersInsertSecurityOption3.prototype, "oauth2c", void 0);
    return YoutubeChannelBannersInsertSecurityOption3;
}(SpeakeasyBase));
export { YoutubeChannelBannersInsertSecurityOption3 };
var YoutubeChannelBannersInsertSecurity = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertSecurity, _super);
    function YoutubeChannelBannersInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelBannersInsertSecurityOption1)
    ], YoutubeChannelBannersInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelBannersInsertSecurityOption2)
    ], YoutubeChannelBannersInsertSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", YoutubeChannelBannersInsertSecurityOption3)
    ], YoutubeChannelBannersInsertSecurity.prototype, "option3", void 0);
    return YoutubeChannelBannersInsertSecurity;
}(SpeakeasyBase));
export { YoutubeChannelBannersInsertSecurity };
var YoutubeChannelBannersInsertRequest = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertRequest, _super);
    function YoutubeChannelBannersInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeChannelBannersInsertQueryParams)
    ], YoutubeChannelBannersInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeChannelBannersInsertRequests)
    ], YoutubeChannelBannersInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", YoutubeChannelBannersInsertSecurity)
    ], YoutubeChannelBannersInsertRequest.prototype, "security", void 0);
    return YoutubeChannelBannersInsertRequest;
}(SpeakeasyBase));
export { YoutubeChannelBannersInsertRequest };
var YoutubeChannelBannersInsertResponse = /** @class */ (function (_super) {
    __extends(YoutubeChannelBannersInsertResponse, _super);
    function YoutubeChannelBannersInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChannelBannerResource)
    ], YoutubeChannelBannersInsertResponse.prototype, "channelBannerResource", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], YoutubeChannelBannersInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], YoutubeChannelBannersInsertResponse.prototype, "statusCode", void 0);
    return YoutubeChannelBannersInsertResponse;
}(SpeakeasyBase));
export { YoutubeChannelBannersInsertResponse };
