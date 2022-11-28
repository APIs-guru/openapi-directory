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
var GmailUsersSettingsFiltersGetPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersGetPathParams, _super);
    function GmailUsersSettingsFiltersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsFiltersGetPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersGetPathParams };
var GmailUsersSettingsFiltersGetQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersGetQueryParams, _super);
    function GmailUsersSettingsFiltersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsFiltersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsFiltersGetQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersGetQueryParams };
var GmailUsersSettingsFiltersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersGetSecurityOption1, _super);
    function GmailUsersSettingsFiltersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsFiltersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsFiltersGetSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsFiltersGetSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersGetSecurityOption1 };
var GmailUsersSettingsFiltersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersGetSecurityOption2, _super);
    function GmailUsersSettingsFiltersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsFiltersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsFiltersGetSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsFiltersGetSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersGetSecurityOption2 };
var GmailUsersSettingsFiltersGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersGetSecurityOption3, _super);
    function GmailUsersSettingsFiltersGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsFiltersGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsFiltersGetSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsFiltersGetSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersGetSecurityOption3 };
var GmailUsersSettingsFiltersGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersGetSecurityOption4, _super);
    function GmailUsersSettingsFiltersGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsFiltersGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsFiltersGetSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsFiltersGetSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersGetSecurityOption4 };
var GmailUsersSettingsFiltersGetSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersGetSecurity, _super);
    function GmailUsersSettingsFiltersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsFiltersGetSecurityOption1)
    ], GmailUsersSettingsFiltersGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsFiltersGetSecurityOption2)
    ], GmailUsersSettingsFiltersGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsFiltersGetSecurityOption3)
    ], GmailUsersSettingsFiltersGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsFiltersGetSecurityOption4)
    ], GmailUsersSettingsFiltersGetSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsFiltersGetSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersGetSecurity };
var GmailUsersSettingsFiltersGetRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersGetRequest, _super);
    function GmailUsersSettingsFiltersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsFiltersGetPathParams)
    ], GmailUsersSettingsFiltersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsFiltersGetQueryParams)
    ], GmailUsersSettingsFiltersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsFiltersGetSecurity)
    ], GmailUsersSettingsFiltersGetRequest.prototype, "security", void 0);
    return GmailUsersSettingsFiltersGetRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersGetRequest };
var GmailUsersSettingsFiltersGetResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersGetResponse, _super);
    function GmailUsersSettingsFiltersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Filter)
    ], GmailUsersSettingsFiltersGetResponse.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsFiltersGetResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsFiltersGetResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersGetResponse };
