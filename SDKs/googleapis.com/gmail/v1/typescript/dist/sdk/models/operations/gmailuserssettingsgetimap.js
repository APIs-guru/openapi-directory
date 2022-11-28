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
var GmailUsersSettingsGetImapPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetImapPathParams, _super);
    function GmailUsersSettingsGetImapPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsGetImapPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsGetImapPathParams };
var GmailUsersSettingsGetImapQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetImapQueryParams, _super);
    function GmailUsersSettingsGetImapQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsGetImapQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsGetImapQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsGetImapQueryParams };
var GmailUsersSettingsGetImapSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetImapSecurityOption1, _super);
    function GmailUsersSettingsGetImapSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetImapSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetImapSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetImapSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsGetImapSecurityOption1 };
var GmailUsersSettingsGetImapSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetImapSecurityOption2, _super);
    function GmailUsersSettingsGetImapSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetImapSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetImapSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetImapSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsGetImapSecurityOption2 };
var GmailUsersSettingsGetImapSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetImapSecurityOption3, _super);
    function GmailUsersSettingsGetImapSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetImapSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetImapSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetImapSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsGetImapSecurityOption3 };
var GmailUsersSettingsGetImapSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetImapSecurityOption4, _super);
    function GmailUsersSettingsGetImapSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetImapSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetImapSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetImapSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsGetImapSecurityOption4 };
var GmailUsersSettingsGetImapSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetImapSecurity, _super);
    function GmailUsersSettingsGetImapSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetImapSecurityOption1)
    ], GmailUsersSettingsGetImapSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetImapSecurityOption2)
    ], GmailUsersSettingsGetImapSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetImapSecurityOption3)
    ], GmailUsersSettingsGetImapSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetImapSecurityOption4)
    ], GmailUsersSettingsGetImapSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsGetImapSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsGetImapSecurity };
var GmailUsersSettingsGetImapRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetImapRequest, _super);
    function GmailUsersSettingsGetImapRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetImapPathParams)
    ], GmailUsersSettingsGetImapRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetImapQueryParams)
    ], GmailUsersSettingsGetImapRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetImapSecurity)
    ], GmailUsersSettingsGetImapRequest.prototype, "security", void 0);
    return GmailUsersSettingsGetImapRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsGetImapRequest };
var GmailUsersSettingsGetImapResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetImapResponse, _super);
    function GmailUsersSettingsGetImapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetImapResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImapSettings)
    ], GmailUsersSettingsGetImapResponse.prototype, "imapSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsGetImapResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsGetImapResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsGetImapResponse };
