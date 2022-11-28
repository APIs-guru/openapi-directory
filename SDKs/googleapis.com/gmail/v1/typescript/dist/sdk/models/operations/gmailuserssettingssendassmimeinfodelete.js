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
var GmailUsersSettingsSendAsSmimeInfoDeletePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoDeletePathParams, _super);
    function GmailUsersSettingsSendAsSmimeInfoDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeletePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sendAsEmail" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeletePathParams.prototype, "sendAsEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeletePathParams.prototype, "userId", void 0);
    return GmailUsersSettingsSendAsSmimeInfoDeletePathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoDeletePathParams };
var GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams, _super);
    function GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams };
var GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption1, _super);
    function GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption1 };
var GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption2, _super);
    function GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption2 };
var GmailUsersSettingsSendAsSmimeInfoDeleteSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoDeleteSecurity, _super);
    function GmailUsersSettingsSendAsSmimeInfoDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption1)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoDeleteSecurityOption2)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteSecurity.prototype, "option2", void 0);
    return GmailUsersSettingsSendAsSmimeInfoDeleteSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoDeleteSecurity };
var GmailUsersSettingsSendAsSmimeInfoDeleteRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoDeleteRequest, _super);
    function GmailUsersSettingsSendAsSmimeInfoDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoDeletePathParams)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoDeleteQueryParams)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoDeleteSecurity)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteRequest.prototype, "security", void 0);
    return GmailUsersSettingsSendAsSmimeInfoDeleteRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoDeleteRequest };
var GmailUsersSettingsSendAsSmimeInfoDeleteResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoDeleteResponse, _super);
    function GmailUsersSettingsSendAsSmimeInfoDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsSendAsSmimeInfoDeleteResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsSendAsSmimeInfoDeleteResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoDeleteResponse };
