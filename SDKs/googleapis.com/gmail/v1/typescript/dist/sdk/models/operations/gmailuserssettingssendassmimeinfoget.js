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
var GmailUsersSettingsSendAsSmimeInfoGetPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoGetPathParams, _super);
    function GmailUsersSettingsSendAsSmimeInfoGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sendAsEmail" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetPathParams.prototype, "sendAsEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsSendAsSmimeInfoGetPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoGetPathParams };
var GmailUsersSettingsSendAsSmimeInfoGetQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoGetQueryParams, _super);
    function GmailUsersSettingsSendAsSmimeInfoGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsSendAsSmimeInfoGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsSendAsSmimeInfoGetQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoGetQueryParams };
var GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1, _super);
    function GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1 };
var GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2, _super);
    function GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2 };
var GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3, _super);
    function GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3 };
var GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4, _super);
    function GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4 };
var GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5, _super);
    function GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5 };
var GmailUsersSettingsSendAsSmimeInfoGetSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoGetSecurity, _super);
    function GmailUsersSettingsSendAsSmimeInfoGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoGetSecurityOption1)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoGetSecurityOption2)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoGetSecurityOption3)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoGetSecurityOption4)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoGetSecurityOption5)
    ], GmailUsersSettingsSendAsSmimeInfoGetSecurity.prototype, "option5", void 0);
    return GmailUsersSettingsSendAsSmimeInfoGetSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoGetSecurity };
var GmailUsersSettingsSendAsSmimeInfoGetRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoGetRequest, _super);
    function GmailUsersSettingsSendAsSmimeInfoGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoGetPathParams)
    ], GmailUsersSettingsSendAsSmimeInfoGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoGetQueryParams)
    ], GmailUsersSettingsSendAsSmimeInfoGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoGetSecurity)
    ], GmailUsersSettingsSendAsSmimeInfoGetRequest.prototype, "security", void 0);
    return GmailUsersSettingsSendAsSmimeInfoGetRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoGetRequest };
var GmailUsersSettingsSendAsSmimeInfoGetResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoGetResponse, _super);
    function GmailUsersSettingsSendAsSmimeInfoGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SmimeInfo)
    ], GmailUsersSettingsSendAsSmimeInfoGetResponse.prototype, "smimeInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsSendAsSmimeInfoGetResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsSendAsSmimeInfoGetResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoGetResponse };
