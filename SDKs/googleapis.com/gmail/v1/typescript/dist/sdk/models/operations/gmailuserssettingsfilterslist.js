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
var GmailUsersSettingsFiltersListPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersListPathParams, _super);
    function GmailUsersSettingsFiltersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsFiltersListPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersListPathParams };
var GmailUsersSettingsFiltersListQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersListQueryParams, _super);
    function GmailUsersSettingsFiltersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsFiltersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsFiltersListQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersListQueryParams };
var GmailUsersSettingsFiltersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersListSecurityOption1, _super);
    function GmailUsersSettingsFiltersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsFiltersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsFiltersListSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsFiltersListSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersListSecurityOption1 };
var GmailUsersSettingsFiltersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersListSecurityOption2, _super);
    function GmailUsersSettingsFiltersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsFiltersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsFiltersListSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsFiltersListSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersListSecurityOption2 };
var GmailUsersSettingsFiltersListSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersListSecurityOption3, _super);
    function GmailUsersSettingsFiltersListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsFiltersListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsFiltersListSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsFiltersListSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersListSecurityOption3 };
var GmailUsersSettingsFiltersListSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersListSecurityOption4, _super);
    function GmailUsersSettingsFiltersListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsFiltersListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsFiltersListSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsFiltersListSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersListSecurityOption4 };
var GmailUsersSettingsFiltersListSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersListSecurity, _super);
    function GmailUsersSettingsFiltersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsFiltersListSecurityOption1)
    ], GmailUsersSettingsFiltersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsFiltersListSecurityOption2)
    ], GmailUsersSettingsFiltersListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsFiltersListSecurityOption3)
    ], GmailUsersSettingsFiltersListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsFiltersListSecurityOption4)
    ], GmailUsersSettingsFiltersListSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsFiltersListSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersListSecurity };
var GmailUsersSettingsFiltersListRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersListRequest, _super);
    function GmailUsersSettingsFiltersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsFiltersListPathParams)
    ], GmailUsersSettingsFiltersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsFiltersListQueryParams)
    ], GmailUsersSettingsFiltersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsFiltersListSecurity)
    ], GmailUsersSettingsFiltersListRequest.prototype, "security", void 0);
    return GmailUsersSettingsFiltersListRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersListRequest };
var GmailUsersSettingsFiltersListResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsFiltersListResponse, _super);
    function GmailUsersSettingsFiltersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsFiltersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListFiltersResponse)
    ], GmailUsersSettingsFiltersListResponse.prototype, "listFiltersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsFiltersListResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsFiltersListResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsFiltersListResponse };
