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
var GmailUsersSettingsGetAutoForwardingPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetAutoForwardingPathParams, _super);
    function GmailUsersSettingsGetAutoForwardingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsGetAutoForwardingPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsGetAutoForwardingPathParams };
var GmailUsersSettingsGetAutoForwardingQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetAutoForwardingQueryParams, _super);
    function GmailUsersSettingsGetAutoForwardingQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsGetAutoForwardingQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsGetAutoForwardingQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsGetAutoForwardingQueryParams };
var GmailUsersSettingsGetAutoForwardingSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetAutoForwardingSecurityOption1, _super);
    function GmailUsersSettingsGetAutoForwardingSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetAutoForwardingSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetAutoForwardingSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetAutoForwardingSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsGetAutoForwardingSecurityOption1 };
var GmailUsersSettingsGetAutoForwardingSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetAutoForwardingSecurityOption2, _super);
    function GmailUsersSettingsGetAutoForwardingSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetAutoForwardingSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetAutoForwardingSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetAutoForwardingSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsGetAutoForwardingSecurityOption2 };
var GmailUsersSettingsGetAutoForwardingSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetAutoForwardingSecurityOption3, _super);
    function GmailUsersSettingsGetAutoForwardingSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetAutoForwardingSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetAutoForwardingSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetAutoForwardingSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsGetAutoForwardingSecurityOption3 };
var GmailUsersSettingsGetAutoForwardingSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetAutoForwardingSecurityOption4, _super);
    function GmailUsersSettingsGetAutoForwardingSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetAutoForwardingSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetAutoForwardingSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetAutoForwardingSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsGetAutoForwardingSecurityOption4 };
var GmailUsersSettingsGetAutoForwardingSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetAutoForwardingSecurity, _super);
    function GmailUsersSettingsGetAutoForwardingSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetAutoForwardingSecurityOption1)
    ], GmailUsersSettingsGetAutoForwardingSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetAutoForwardingSecurityOption2)
    ], GmailUsersSettingsGetAutoForwardingSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetAutoForwardingSecurityOption3)
    ], GmailUsersSettingsGetAutoForwardingSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetAutoForwardingSecurityOption4)
    ], GmailUsersSettingsGetAutoForwardingSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsGetAutoForwardingSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsGetAutoForwardingSecurity };
var GmailUsersSettingsGetAutoForwardingRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetAutoForwardingRequest, _super);
    function GmailUsersSettingsGetAutoForwardingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetAutoForwardingPathParams)
    ], GmailUsersSettingsGetAutoForwardingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetAutoForwardingQueryParams)
    ], GmailUsersSettingsGetAutoForwardingRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetAutoForwardingSecurity)
    ], GmailUsersSettingsGetAutoForwardingRequest.prototype, "security", void 0);
    return GmailUsersSettingsGetAutoForwardingRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsGetAutoForwardingRequest };
var GmailUsersSettingsGetAutoForwardingResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetAutoForwardingResponse, _super);
    function GmailUsersSettingsGetAutoForwardingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AutoForwarding)
    ], GmailUsersSettingsGetAutoForwardingResponse.prototype, "autoForwarding", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetAutoForwardingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsGetAutoForwardingResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsGetAutoForwardingResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsGetAutoForwardingResponse };
