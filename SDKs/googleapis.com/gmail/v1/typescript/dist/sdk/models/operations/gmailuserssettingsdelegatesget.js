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
var GmailUsersSettingsDelegatesGetPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesGetPathParams, _super);
    function GmailUsersSettingsDelegatesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=delegateEmail" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetPathParams.prototype, "delegateEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsDelegatesGetPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesGetPathParams };
var GmailUsersSettingsDelegatesGetQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesGetQueryParams, _super);
    function GmailUsersSettingsDelegatesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsDelegatesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsDelegatesGetQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesGetQueryParams };
var GmailUsersSettingsDelegatesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesGetSecurityOption1, _super);
    function GmailUsersSettingsDelegatesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsDelegatesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsDelegatesGetSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsDelegatesGetSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesGetSecurityOption1 };
var GmailUsersSettingsDelegatesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesGetSecurityOption2, _super);
    function GmailUsersSettingsDelegatesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsDelegatesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsDelegatesGetSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsDelegatesGetSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesGetSecurityOption2 };
var GmailUsersSettingsDelegatesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesGetSecurityOption3, _super);
    function GmailUsersSettingsDelegatesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsDelegatesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsDelegatesGetSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsDelegatesGetSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesGetSecurityOption3 };
var GmailUsersSettingsDelegatesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesGetSecurityOption4, _super);
    function GmailUsersSettingsDelegatesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsDelegatesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsDelegatesGetSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsDelegatesGetSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesGetSecurityOption4 };
var GmailUsersSettingsDelegatesGetSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesGetSecurity, _super);
    function GmailUsersSettingsDelegatesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsDelegatesGetSecurityOption1)
    ], GmailUsersSettingsDelegatesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsDelegatesGetSecurityOption2)
    ], GmailUsersSettingsDelegatesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsDelegatesGetSecurityOption3)
    ], GmailUsersSettingsDelegatesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsDelegatesGetSecurityOption4)
    ], GmailUsersSettingsDelegatesGetSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsDelegatesGetSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesGetSecurity };
var GmailUsersSettingsDelegatesGetRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesGetRequest, _super);
    function GmailUsersSettingsDelegatesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsDelegatesGetPathParams)
    ], GmailUsersSettingsDelegatesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsDelegatesGetQueryParams)
    ], GmailUsersSettingsDelegatesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsDelegatesGetSecurity)
    ], GmailUsersSettingsDelegatesGetRequest.prototype, "security", void 0);
    return GmailUsersSettingsDelegatesGetRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesGetRequest };
var GmailUsersSettingsDelegatesGetResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesGetResponse, _super);
    function GmailUsersSettingsDelegatesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Delegate)
    ], GmailUsersSettingsDelegatesGetResponse.prototype, "delegate", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsDelegatesGetResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsDelegatesGetResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesGetResponse };
