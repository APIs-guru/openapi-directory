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
var GmailUsersSettingsSendAsGetPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsGetPathParams, _super);
    function GmailUsersSettingsSendAsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sendAsEmail" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetPathParams.prototype, "sendAsEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsSendAsGetPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsGetPathParams };
var GmailUsersSettingsSendAsGetQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsGetQueryParams, _super);
    function GmailUsersSettingsSendAsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsSendAsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsSendAsGetQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsGetQueryParams };
var GmailUsersSettingsSendAsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsGetSecurityOption1, _super);
    function GmailUsersSettingsSendAsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsGetSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsGetSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsGetSecurityOption1 };
var GmailUsersSettingsSendAsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsGetSecurityOption2, _super);
    function GmailUsersSettingsSendAsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsGetSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsGetSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsGetSecurityOption2 };
var GmailUsersSettingsSendAsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsGetSecurityOption3, _super);
    function GmailUsersSettingsSendAsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsGetSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsGetSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsGetSecurityOption3 };
var GmailUsersSettingsSendAsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsGetSecurityOption4, _super);
    function GmailUsersSettingsSendAsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsGetSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsGetSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsGetSecurityOption4 };
var GmailUsersSettingsSendAsGetSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsGetSecurity, _super);
    function GmailUsersSettingsSendAsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsGetSecurityOption1)
    ], GmailUsersSettingsSendAsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsGetSecurityOption2)
    ], GmailUsersSettingsSendAsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsGetSecurityOption3)
    ], GmailUsersSettingsSendAsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsGetSecurityOption4)
    ], GmailUsersSettingsSendAsGetSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsSendAsGetSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsGetSecurity };
var GmailUsersSettingsSendAsGetRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsGetRequest, _super);
    function GmailUsersSettingsSendAsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsGetPathParams)
    ], GmailUsersSettingsSendAsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsGetQueryParams)
    ], GmailUsersSettingsSendAsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsGetSecurity)
    ], GmailUsersSettingsSendAsGetRequest.prototype, "security", void 0);
    return GmailUsersSettingsSendAsGetRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsGetRequest };
var GmailUsersSettingsSendAsGetResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsGetResponse, _super);
    function GmailUsersSettingsSendAsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SendAs)
    ], GmailUsersSettingsSendAsGetResponse.prototype, "sendAs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsSendAsGetResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsSendAsGetResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsGetResponse };
