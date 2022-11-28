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
var GmailUsersSettingsGetPopPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetPopPathParams, _super);
    function GmailUsersSettingsGetPopPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsGetPopPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsGetPopPathParams };
var GmailUsersSettingsGetPopQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetPopQueryParams, _super);
    function GmailUsersSettingsGetPopQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsGetPopQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsGetPopQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsGetPopQueryParams };
var GmailUsersSettingsGetPopSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetPopSecurityOption1, _super);
    function GmailUsersSettingsGetPopSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetPopSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetPopSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetPopSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsGetPopSecurityOption1 };
var GmailUsersSettingsGetPopSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetPopSecurityOption2, _super);
    function GmailUsersSettingsGetPopSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetPopSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetPopSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetPopSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsGetPopSecurityOption2 };
var GmailUsersSettingsGetPopSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetPopSecurityOption3, _super);
    function GmailUsersSettingsGetPopSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetPopSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetPopSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetPopSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsGetPopSecurityOption3 };
var GmailUsersSettingsGetPopSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetPopSecurityOption4, _super);
    function GmailUsersSettingsGetPopSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetPopSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetPopSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetPopSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsGetPopSecurityOption4 };
var GmailUsersSettingsGetPopSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetPopSecurity, _super);
    function GmailUsersSettingsGetPopSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetPopSecurityOption1)
    ], GmailUsersSettingsGetPopSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetPopSecurityOption2)
    ], GmailUsersSettingsGetPopSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetPopSecurityOption3)
    ], GmailUsersSettingsGetPopSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetPopSecurityOption4)
    ], GmailUsersSettingsGetPopSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsGetPopSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsGetPopSecurity };
var GmailUsersSettingsGetPopRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetPopRequest, _super);
    function GmailUsersSettingsGetPopRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetPopPathParams)
    ], GmailUsersSettingsGetPopRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetPopQueryParams)
    ], GmailUsersSettingsGetPopRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetPopSecurity)
    ], GmailUsersSettingsGetPopRequest.prototype, "security", void 0);
    return GmailUsersSettingsGetPopRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsGetPopRequest };
var GmailUsersSettingsGetPopResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetPopResponse, _super);
    function GmailUsersSettingsGetPopResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetPopResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PopSettings)
    ], GmailUsersSettingsGetPopResponse.prototype, "popSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsGetPopResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsGetPopResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsGetPopResponse };
