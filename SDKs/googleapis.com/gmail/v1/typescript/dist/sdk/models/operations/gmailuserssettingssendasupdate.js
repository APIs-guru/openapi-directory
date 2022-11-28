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
var GmailUsersSettingsSendAsUpdatePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsUpdatePathParams, _super);
    function GmailUsersSettingsSendAsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sendAsEmail" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdatePathParams.prototype, "sendAsEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdatePathParams.prototype, "userId", void 0);
    return GmailUsersSettingsSendAsUpdatePathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsUpdatePathParams };
var GmailUsersSettingsSendAsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsUpdateQueryParams, _super);
    function GmailUsersSettingsSendAsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsSendAsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsSendAsUpdateQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsUpdateQueryParams };
var GmailUsersSettingsSendAsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsUpdateSecurityOption1, _super);
    function GmailUsersSettingsSendAsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsUpdateSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsUpdateSecurityOption1 };
var GmailUsersSettingsSendAsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsUpdateSecurityOption2, _super);
    function GmailUsersSettingsSendAsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsUpdateSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsUpdateSecurityOption2 };
var GmailUsersSettingsSendAsUpdateSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsUpdateSecurity, _super);
    function GmailUsersSettingsSendAsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsUpdateSecurityOption1)
    ], GmailUsersSettingsSendAsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsUpdateSecurityOption2)
    ], GmailUsersSettingsSendAsUpdateSecurity.prototype, "option2", void 0);
    return GmailUsersSettingsSendAsUpdateSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsUpdateSecurity };
var GmailUsersSettingsSendAsUpdateRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsUpdateRequest, _super);
    function GmailUsersSettingsSendAsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsUpdatePathParams)
    ], GmailUsersSettingsSendAsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsUpdateQueryParams)
    ], GmailUsersSettingsSendAsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SendAs)
    ], GmailUsersSettingsSendAsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsUpdateSecurity)
    ], GmailUsersSettingsSendAsUpdateRequest.prototype, "security", void 0);
    return GmailUsersSettingsSendAsUpdateRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsUpdateRequest };
var GmailUsersSettingsSendAsUpdateResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsUpdateResponse, _super);
    function GmailUsersSettingsSendAsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SendAs)
    ], GmailUsersSettingsSendAsUpdateResponse.prototype, "sendAs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsSendAsUpdateResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsSendAsUpdateResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsUpdateResponse };
