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
var GmailUsersGetProfilePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersGetProfilePathParams, _super);
    function GmailUsersGetProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersGetProfilePathParams.prototype, "userId", void 0);
    return GmailUsersGetProfilePathParams;
}(SpeakeasyBase));
export { GmailUsersGetProfilePathParams };
var GmailUsersGetProfileQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersGetProfileQueryParams, _super);
    function GmailUsersGetProfileQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersGetProfileQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersGetProfileQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersGetProfileQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersGetProfileQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersGetProfileQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersGetProfileQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersGetProfileQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersGetProfileQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersGetProfileQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersGetProfileQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersGetProfileQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersGetProfileQueryParams;
}(SpeakeasyBase));
export { GmailUsersGetProfileQueryParams };
var GmailUsersGetProfileSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersGetProfileSecurityOption1, _super);
    function GmailUsersGetProfileSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersGetProfileSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersGetProfileSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersGetProfileSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersGetProfileSecurityOption1 };
var GmailUsersGetProfileSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersGetProfileSecurityOption2, _super);
    function GmailUsersGetProfileSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersGetProfileSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersGetProfileSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersGetProfileSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersGetProfileSecurityOption2 };
var GmailUsersGetProfileSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersGetProfileSecurityOption3, _super);
    function GmailUsersGetProfileSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersGetProfileSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersGetProfileSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersGetProfileSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersGetProfileSecurityOption3 };
var GmailUsersGetProfileSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersGetProfileSecurityOption4, _super);
    function GmailUsersGetProfileSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersGetProfileSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersGetProfileSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersGetProfileSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersGetProfileSecurityOption4 };
var GmailUsersGetProfileSecurityOption5 = /** @class */ (function (_super) {
    __extends(GmailUsersGetProfileSecurityOption5, _super);
    function GmailUsersGetProfileSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersGetProfileSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersGetProfileSecurityOption5.prototype, "oauth2c", void 0);
    return GmailUsersGetProfileSecurityOption5;
}(SpeakeasyBase));
export { GmailUsersGetProfileSecurityOption5 };
var GmailUsersGetProfileSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersGetProfileSecurity, _super);
    function GmailUsersGetProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersGetProfileSecurityOption1)
    ], GmailUsersGetProfileSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersGetProfileSecurityOption2)
    ], GmailUsersGetProfileSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersGetProfileSecurityOption3)
    ], GmailUsersGetProfileSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersGetProfileSecurityOption4)
    ], GmailUsersGetProfileSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersGetProfileSecurityOption5)
    ], GmailUsersGetProfileSecurity.prototype, "option5", void 0);
    return GmailUsersGetProfileSecurity;
}(SpeakeasyBase));
export { GmailUsersGetProfileSecurity };
var GmailUsersGetProfileRequest = /** @class */ (function (_super) {
    __extends(GmailUsersGetProfileRequest, _super);
    function GmailUsersGetProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersGetProfilePathParams)
    ], GmailUsersGetProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersGetProfileQueryParams)
    ], GmailUsersGetProfileRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersGetProfileSecurity)
    ], GmailUsersGetProfileRequest.prototype, "security", void 0);
    return GmailUsersGetProfileRequest;
}(SpeakeasyBase));
export { GmailUsersGetProfileRequest };
var GmailUsersGetProfileResponse = /** @class */ (function (_super) {
    __extends(GmailUsersGetProfileResponse, _super);
    function GmailUsersGetProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersGetProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Profile)
    ], GmailUsersGetProfileResponse.prototype, "profile", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersGetProfileResponse.prototype, "statusCode", void 0);
    return GmailUsersGetProfileResponse;
}(SpeakeasyBase));
export { GmailUsersGetProfileResponse };
