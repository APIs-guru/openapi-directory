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
var GmailUsersSettingsSendAsPatchPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsPatchPathParams, _super);
    function GmailUsersSettingsSendAsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sendAsEmail" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchPathParams.prototype, "sendAsEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsSendAsPatchPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsPatchPathParams };
var GmailUsersSettingsSendAsPatchQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsPatchQueryParams, _super);
    function GmailUsersSettingsSendAsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsSendAsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsSendAsPatchQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsPatchQueryParams };
var GmailUsersSettingsSendAsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsPatchSecurityOption1, _super);
    function GmailUsersSettingsSendAsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsPatchSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsPatchSecurityOption1 };
var GmailUsersSettingsSendAsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsPatchSecurityOption2, _super);
    function GmailUsersSettingsSendAsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsPatchSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsPatchSecurityOption2 };
var GmailUsersSettingsSendAsPatchSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsPatchSecurity, _super);
    function GmailUsersSettingsSendAsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsPatchSecurityOption1)
    ], GmailUsersSettingsSendAsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsPatchSecurityOption2)
    ], GmailUsersSettingsSendAsPatchSecurity.prototype, "option2", void 0);
    return GmailUsersSettingsSendAsPatchSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsPatchSecurity };
var GmailUsersSettingsSendAsPatchRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsPatchRequest, _super);
    function GmailUsersSettingsSendAsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsPatchPathParams)
    ], GmailUsersSettingsSendAsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsPatchQueryParams)
    ], GmailUsersSettingsSendAsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SendAs)
    ], GmailUsersSettingsSendAsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsPatchSecurity)
    ], GmailUsersSettingsSendAsPatchRequest.prototype, "security", void 0);
    return GmailUsersSettingsSendAsPatchRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsPatchRequest };
var GmailUsersSettingsSendAsPatchResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsPatchResponse, _super);
    function GmailUsersSettingsSendAsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SendAs)
    ], GmailUsersSettingsSendAsPatchResponse.prototype, "sendAs", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsSendAsPatchResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsSendAsPatchResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsPatchResponse };
