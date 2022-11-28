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
var GmailUsersSettingsSendAsListPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsListPathParams, _super);
    function GmailUsersSettingsSendAsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsSendAsListPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsListPathParams };
var GmailUsersSettingsSendAsListQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsListQueryParams, _super);
    function GmailUsersSettingsSendAsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsSendAsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsSendAsListQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsListQueryParams };
var GmailUsersSettingsSendAsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsListSecurityOption1, _super);
    function GmailUsersSettingsSendAsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsListSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsListSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsListSecurityOption1 };
var GmailUsersSettingsSendAsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsListSecurityOption2, _super);
    function GmailUsersSettingsSendAsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsListSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsListSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsListSecurityOption2 };
var GmailUsersSettingsSendAsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsListSecurityOption3, _super);
    function GmailUsersSettingsSendAsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsListSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsListSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsListSecurityOption3 };
var GmailUsersSettingsSendAsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsListSecurityOption4, _super);
    function GmailUsersSettingsSendAsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsListSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsListSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsListSecurityOption4 };
var GmailUsersSettingsSendAsListSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsListSecurity, _super);
    function GmailUsersSettingsSendAsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsListSecurityOption1)
    ], GmailUsersSettingsSendAsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsListSecurityOption2)
    ], GmailUsersSettingsSendAsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsListSecurityOption3)
    ], GmailUsersSettingsSendAsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsListSecurityOption4)
    ], GmailUsersSettingsSendAsListSecurity.prototype, "option4", void 0);
    return GmailUsersSettingsSendAsListSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsListSecurity };
var GmailUsersSettingsSendAsListRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsListRequest, _super);
    function GmailUsersSettingsSendAsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsListPathParams)
    ], GmailUsersSettingsSendAsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsListQueryParams)
    ], GmailUsersSettingsSendAsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsListSecurity)
    ], GmailUsersSettingsSendAsListRequest.prototype, "security", void 0);
    return GmailUsersSettingsSendAsListRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsListRequest };
var GmailUsersSettingsSendAsListResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsListResponse, _super);
    function GmailUsersSettingsSendAsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSendAsResponse)
    ], GmailUsersSettingsSendAsListResponse.prototype, "listSendAsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsSendAsListResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsSendAsListResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsListResponse };
