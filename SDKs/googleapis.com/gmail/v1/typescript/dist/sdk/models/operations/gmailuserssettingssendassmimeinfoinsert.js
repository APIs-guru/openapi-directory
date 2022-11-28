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
var GmailUsersSettingsSendAsSmimeInfoInsertPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoInsertPathParams, _super);
    function GmailUsersSettingsSendAsSmimeInfoInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sendAsEmail" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertPathParams.prototype, "sendAsEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsSendAsSmimeInfoInsertPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoInsertPathParams };
var GmailUsersSettingsSendAsSmimeInfoInsertQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoInsertQueryParams, _super);
    function GmailUsersSettingsSendAsSmimeInfoInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsSendAsSmimeInfoInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsSendAsSmimeInfoInsertQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoInsertQueryParams };
var GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1, _super);
    function GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1 };
var GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2, _super);
    function GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2 };
var GmailUsersSettingsSendAsSmimeInfoInsertSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoInsertSecurity, _super);
    function GmailUsersSettingsSendAsSmimeInfoInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption1)
    ], GmailUsersSettingsSendAsSmimeInfoInsertSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoInsertSecurityOption2)
    ], GmailUsersSettingsSendAsSmimeInfoInsertSecurity.prototype, "option2", void 0);
    return GmailUsersSettingsSendAsSmimeInfoInsertSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoInsertSecurity };
var GmailUsersSettingsSendAsSmimeInfoInsertRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoInsertRequest, _super);
    function GmailUsersSettingsSendAsSmimeInfoInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoInsertPathParams)
    ], GmailUsersSettingsSendAsSmimeInfoInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoInsertQueryParams)
    ], GmailUsersSettingsSendAsSmimeInfoInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SmimeInfo)
    ], GmailUsersSettingsSendAsSmimeInfoInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoInsertSecurity)
    ], GmailUsersSettingsSendAsSmimeInfoInsertRequest.prototype, "security", void 0);
    return GmailUsersSettingsSendAsSmimeInfoInsertRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoInsertRequest };
var GmailUsersSettingsSendAsSmimeInfoInsertResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoInsertResponse, _super);
    function GmailUsersSettingsSendAsSmimeInfoInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SmimeInfo)
    ], GmailUsersSettingsSendAsSmimeInfoInsertResponse.prototype, "smimeInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsSendAsSmimeInfoInsertResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsSendAsSmimeInfoInsertResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoInsertResponse };
