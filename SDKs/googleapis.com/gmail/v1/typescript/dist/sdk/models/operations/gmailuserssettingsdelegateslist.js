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
var GmailUsersSettingsDelegatesListPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesListPathParams, _super);
    function GmailUsersSettingsDelegatesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsDelegatesListPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesListPathParams };
var GmailUsersSettingsDelegatesListQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesListQueryParams, _super);
    function GmailUsersSettingsDelegatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsDelegatesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsDelegatesListQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesListQueryParams };
var GmailUsersSettingsDelegatesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesListSecurityOption1, _super);
    function GmailUsersSettingsDelegatesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsDelegatesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsDelegatesListSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsDelegatesListSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesListSecurityOption1 };
var GmailUsersSettingsDelegatesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesListSecurityOption2, _super);
    function GmailUsersSettingsDelegatesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsDelegatesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsDelegatesListSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsDelegatesListSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesListSecurityOption2 };
var GmailUsersSettingsDelegatesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesListSecurityOption3, _super);
    function GmailUsersSettingsDelegatesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsDelegatesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsDelegatesListSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsDelegatesListSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesListSecurityOption3 };
var GmailUsersSettingsDelegatesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesListSecurityOption4, _super);
    function GmailUsersSettingsDelegatesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsDelegatesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsDelegatesListSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsDelegatesListSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesListSecurityOption4 };
var GmailUsersSettingsDelegatesListSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesListSecurity, _super);
    function GmailUsersSettingsDelegatesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsDelegatesListSecurityOption1)
    ], GmailUsersSettingsDelegatesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsDelegatesListSecurityOption2)
    ], GmailUsersSettingsDelegatesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsDelegatesListSecurityOption3)
    ], GmailUsersSettingsDelegatesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsDelegatesListSecurityOption4)
    ], GmailUsersSettingsDelegatesListSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsDelegatesListSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesListSecurity };
var GmailUsersSettingsDelegatesListRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesListRequest, _super);
    function GmailUsersSettingsDelegatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsDelegatesListPathParams)
    ], GmailUsersSettingsDelegatesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsDelegatesListQueryParams)
    ], GmailUsersSettingsDelegatesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsDelegatesListSecurity)
    ], GmailUsersSettingsDelegatesListRequest.prototype, "security", void 0);
    return GmailUsersSettingsDelegatesListRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesListRequest };
var GmailUsersSettingsDelegatesListResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsDelegatesListResponse, _super);
    function GmailUsersSettingsDelegatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsDelegatesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDelegatesResponse)
    ], GmailUsersSettingsDelegatesListResponse.prototype, "listDelegatesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsDelegatesListResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsDelegatesListResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsDelegatesListResponse };
