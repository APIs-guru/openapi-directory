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
var GmailUsersSettingsForwardingAddressesGetPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesGetPathParams, _super);
    function GmailUsersSettingsForwardingAddressesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=forwardingEmail" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetPathParams.prototype, "forwardingEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsForwardingAddressesGetPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesGetPathParams };
var GmailUsersSettingsForwardingAddressesGetQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesGetQueryParams, _super);
    function GmailUsersSettingsForwardingAddressesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsForwardingAddressesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsForwardingAddressesGetQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesGetQueryParams };
var GmailUsersSettingsForwardingAddressesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesGetSecurityOption1, _super);
    function GmailUsersSettingsForwardingAddressesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsForwardingAddressesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsForwardingAddressesGetSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsForwardingAddressesGetSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesGetSecurityOption1 };
var GmailUsersSettingsForwardingAddressesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesGetSecurityOption2, _super);
    function GmailUsersSettingsForwardingAddressesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsForwardingAddressesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsForwardingAddressesGetSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsForwardingAddressesGetSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesGetSecurityOption2 };
var GmailUsersSettingsForwardingAddressesGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesGetSecurityOption3, _super);
    function GmailUsersSettingsForwardingAddressesGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsForwardingAddressesGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsForwardingAddressesGetSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsForwardingAddressesGetSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesGetSecurityOption3 };
var GmailUsersSettingsForwardingAddressesGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesGetSecurityOption4, _super);
    function GmailUsersSettingsForwardingAddressesGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsForwardingAddressesGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsForwardingAddressesGetSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsForwardingAddressesGetSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesGetSecurityOption4 };
var GmailUsersSettingsForwardingAddressesGetSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesGetSecurity, _super);
    function GmailUsersSettingsForwardingAddressesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesGetSecurityOption1)
    ], GmailUsersSettingsForwardingAddressesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesGetSecurityOption2)
    ], GmailUsersSettingsForwardingAddressesGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesGetSecurityOption3)
    ], GmailUsersSettingsForwardingAddressesGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesGetSecurityOption4)
    ], GmailUsersSettingsForwardingAddressesGetSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsForwardingAddressesGetSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesGetSecurity };
var GmailUsersSettingsForwardingAddressesGetRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesGetRequest, _super);
    function GmailUsersSettingsForwardingAddressesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesGetPathParams)
    ], GmailUsersSettingsForwardingAddressesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesGetQueryParams)
    ], GmailUsersSettingsForwardingAddressesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsForwardingAddressesGetSecurity)
    ], GmailUsersSettingsForwardingAddressesGetRequest.prototype, "security", void 0);
    return GmailUsersSettingsForwardingAddressesGetRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesGetRequest };
var GmailUsersSettingsForwardingAddressesGetResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsForwardingAddressesGetResponse, _super);
    function GmailUsersSettingsForwardingAddressesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsForwardingAddressesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ForwardingAddress)
    ], GmailUsersSettingsForwardingAddressesGetResponse.prototype, "forwardingAddress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsForwardingAddressesGetResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsForwardingAddressesGetResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsForwardingAddressesGetResponse };
