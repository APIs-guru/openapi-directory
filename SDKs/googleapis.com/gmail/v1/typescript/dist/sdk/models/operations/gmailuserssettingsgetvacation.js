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
var GmailUsersSettingsGetVacationPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetVacationPathParams, _super);
    function GmailUsersSettingsGetVacationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsGetVacationPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsGetVacationPathParams };
var GmailUsersSettingsGetVacationQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetVacationQueryParams, _super);
    function GmailUsersSettingsGetVacationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsGetVacationQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsGetVacationQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsGetVacationQueryParams };
var GmailUsersSettingsGetVacationSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetVacationSecurityOption1, _super);
    function GmailUsersSettingsGetVacationSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetVacationSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetVacationSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetVacationSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsGetVacationSecurityOption1 };
var GmailUsersSettingsGetVacationSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetVacationSecurityOption2, _super);
    function GmailUsersSettingsGetVacationSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetVacationSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetVacationSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetVacationSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsGetVacationSecurityOption2 };
var GmailUsersSettingsGetVacationSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetVacationSecurityOption3, _super);
    function GmailUsersSettingsGetVacationSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetVacationSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetVacationSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetVacationSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsGetVacationSecurityOption3 };
var GmailUsersSettingsGetVacationSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetVacationSecurityOption4, _super);
    function GmailUsersSettingsGetVacationSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsGetVacationSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsGetVacationSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsGetVacationSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsGetVacationSecurityOption4 };
var GmailUsersSettingsGetVacationSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetVacationSecurity, _super);
    function GmailUsersSettingsGetVacationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetVacationSecurityOption1)
    ], GmailUsersSettingsGetVacationSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetVacationSecurityOption2)
    ], GmailUsersSettingsGetVacationSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetVacationSecurityOption3)
    ], GmailUsersSettingsGetVacationSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsGetVacationSecurityOption4)
    ], GmailUsersSettingsGetVacationSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsGetVacationSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsGetVacationSecurity };
var GmailUsersSettingsGetVacationRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetVacationRequest, _super);
    function GmailUsersSettingsGetVacationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetVacationPathParams)
    ], GmailUsersSettingsGetVacationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetVacationQueryParams)
    ], GmailUsersSettingsGetVacationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsGetVacationSecurity)
    ], GmailUsersSettingsGetVacationRequest.prototype, "security", void 0);
    return GmailUsersSettingsGetVacationRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsGetVacationRequest };
var GmailUsersSettingsGetVacationResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsGetVacationResponse, _super);
    function GmailUsersSettingsGetVacationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsGetVacationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsGetVacationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.VacationSettings)
    ], GmailUsersSettingsGetVacationResponse.prototype, "vacationSettings", void 0);
    return GmailUsersSettingsGetVacationResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsGetVacationResponse };
