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
var GmailUsersMessagesAttachmentsGetPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesAttachmentsGetPathParams, _super);
    function GmailUsersMessagesAttachmentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=messageId" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetPathParams.prototype, "messageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetPathParams.prototype, "userId", void 0);
    return GmailUsersMessagesAttachmentsGetPathParams;
}(SpeakeasyBase));
export { GmailUsersMessagesAttachmentsGetPathParams };
var GmailUsersMessagesAttachmentsGetQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesAttachmentsGetQueryParams, _super);
    function GmailUsersMessagesAttachmentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersMessagesAttachmentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersMessagesAttachmentsGetQueryParams;
}(SpeakeasyBase));
export { GmailUsersMessagesAttachmentsGetQueryParams };
var GmailUsersMessagesAttachmentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesAttachmentsGetSecurityOption1, _super);
    function GmailUsersMessagesAttachmentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesAttachmentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesAttachmentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersMessagesAttachmentsGetSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersMessagesAttachmentsGetSecurityOption1 };
var GmailUsersMessagesAttachmentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesAttachmentsGetSecurityOption2, _super);
    function GmailUsersMessagesAttachmentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesAttachmentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesAttachmentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersMessagesAttachmentsGetSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersMessagesAttachmentsGetSecurityOption2 };
var GmailUsersMessagesAttachmentsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesAttachmentsGetSecurityOption3, _super);
    function GmailUsersMessagesAttachmentsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesAttachmentsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesAttachmentsGetSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersMessagesAttachmentsGetSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersMessagesAttachmentsGetSecurityOption3 };
var GmailUsersMessagesAttachmentsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesAttachmentsGetSecurityOption4, _super);
    function GmailUsersMessagesAttachmentsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesAttachmentsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesAttachmentsGetSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersMessagesAttachmentsGetSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersMessagesAttachmentsGetSecurityOption4 };
var GmailUsersMessagesAttachmentsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesAttachmentsGetSecurityOption5, _super);
    function GmailUsersMessagesAttachmentsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesAttachmentsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesAttachmentsGetSecurityOption5.prototype, "oauth2c", void 0);
    return GmailUsersMessagesAttachmentsGetSecurityOption5;
}(SpeakeasyBase));
export { GmailUsersMessagesAttachmentsGetSecurityOption5 };
var GmailUsersMessagesAttachmentsGetSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesAttachmentsGetSecurity, _super);
    function GmailUsersMessagesAttachmentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesAttachmentsGetSecurityOption1)
    ], GmailUsersMessagesAttachmentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesAttachmentsGetSecurityOption2)
    ], GmailUsersMessagesAttachmentsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesAttachmentsGetSecurityOption3)
    ], GmailUsersMessagesAttachmentsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesAttachmentsGetSecurityOption4)
    ], GmailUsersMessagesAttachmentsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesAttachmentsGetSecurityOption5)
    ], GmailUsersMessagesAttachmentsGetSecurity.prototype, "option5", void 0);
    return GmailUsersMessagesAttachmentsGetSecurity;
}(SpeakeasyBase));
export { GmailUsersMessagesAttachmentsGetSecurity };
var GmailUsersMessagesAttachmentsGetRequest = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesAttachmentsGetRequest, _super);
    function GmailUsersMessagesAttachmentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesAttachmentsGetPathParams)
    ], GmailUsersMessagesAttachmentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesAttachmentsGetQueryParams)
    ], GmailUsersMessagesAttachmentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesAttachmentsGetSecurity)
    ], GmailUsersMessagesAttachmentsGetRequest.prototype, "security", void 0);
    return GmailUsersMessagesAttachmentsGetRequest;
}(SpeakeasyBase));
export { GmailUsersMessagesAttachmentsGetRequest };
var GmailUsersMessagesAttachmentsGetResponse = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesAttachmentsGetResponse, _super);
    function GmailUsersMessagesAttachmentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersMessagesAttachmentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MessagePartBody)
    ], GmailUsersMessagesAttachmentsGetResponse.prototype, "messagePartBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersMessagesAttachmentsGetResponse.prototype, "statusCode", void 0);
    return GmailUsersMessagesAttachmentsGetResponse;
}(SpeakeasyBase));
export { GmailUsersMessagesAttachmentsGetResponse };
