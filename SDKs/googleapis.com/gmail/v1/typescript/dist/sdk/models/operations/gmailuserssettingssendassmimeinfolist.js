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
var GmailUsersSettingsSendAsSmimeInfoListPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoListPathParams, _super);
    function GmailUsersSettingsSendAsSmimeInfoListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sendAsEmail" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListPathParams.prototype, "sendAsEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListPathParams.prototype, "userId", void 0);
    return GmailUsersSettingsSendAsSmimeInfoListPathParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoListPathParams };
var GmailUsersSettingsSendAsSmimeInfoListQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoListQueryParams, _super);
    function GmailUsersSettingsSendAsSmimeInfoListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersSettingsSendAsSmimeInfoListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersSettingsSendAsSmimeInfoListQueryParams;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoListQueryParams };
var GmailUsersSettingsSendAsSmimeInfoListSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoListSecurityOption1, _super);
    function GmailUsersSettingsSendAsSmimeInfoListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoListSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoListSecurityOption1 };
var GmailUsersSettingsSendAsSmimeInfoListSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoListSecurityOption2, _super);
    function GmailUsersSettingsSendAsSmimeInfoListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoListSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoListSecurityOption2 };
var GmailUsersSettingsSendAsSmimeInfoListSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoListSecurityOption3, _super);
    function GmailUsersSettingsSendAsSmimeInfoListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoListSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoListSecurityOption3 };
var GmailUsersSettingsSendAsSmimeInfoListSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoListSecurityOption4, _super);
    function GmailUsersSettingsSendAsSmimeInfoListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoListSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoListSecurityOption4 };
var GmailUsersSettingsSendAsSmimeInfoListSecurityOption5 = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoListSecurityOption5, _super);
    function GmailUsersSettingsSendAsSmimeInfoListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurityOption5.prototype, "oauth2c", void 0);
    return GmailUsersSettingsSendAsSmimeInfoListSecurityOption5;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoListSecurityOption5 };
var GmailUsersSettingsSendAsSmimeInfoListSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoListSecurity, _super);
    function GmailUsersSettingsSendAsSmimeInfoListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoListSecurityOption1)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoListSecurityOption2)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoListSecurityOption3)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoListSecurityOption4)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoListSecurityOption5)
    ], GmailUsersSettingsSendAsSmimeInfoListSecurity.prototype, "option5", void 0);
    return GmailUsersSettingsSendAsSmimeInfoListSecurity;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoListSecurity };
var GmailUsersSettingsSendAsSmimeInfoListRequest = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoListRequest, _super);
    function GmailUsersSettingsSendAsSmimeInfoListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoListPathParams)
    ], GmailUsersSettingsSendAsSmimeInfoListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoListQueryParams)
    ], GmailUsersSettingsSendAsSmimeInfoListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersSettingsSendAsSmimeInfoListSecurity)
    ], GmailUsersSettingsSendAsSmimeInfoListRequest.prototype, "security", void 0);
    return GmailUsersSettingsSendAsSmimeInfoListRequest;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoListRequest };
var GmailUsersSettingsSendAsSmimeInfoListResponse = /** @class */ (function (_super) {
    __extends(GmailUsersSettingsSendAsSmimeInfoListResponse, _super);
    function GmailUsersSettingsSendAsSmimeInfoListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersSettingsSendAsSmimeInfoListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSmimeInfoResponse)
    ], GmailUsersSettingsSendAsSmimeInfoListResponse.prototype, "listSmimeInfoResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersSettingsSendAsSmimeInfoListResponse.prototype, "statusCode", void 0);
    return GmailUsersSettingsSendAsSmimeInfoListResponse;
}(SpeakeasyBase));
export { GmailUsersSettingsSendAsSmimeInfoListResponse };
