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
var GmailUsersMessagesUntrashPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesUntrashPathParams, _super);
    function GmailUsersMessagesUntrashPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashPathParams.prototype, "userId", void 0);
    return GmailUsersMessagesUntrashPathParams;
}(SpeakeasyBase));
export { GmailUsersMessagesUntrashPathParams };
var GmailUsersMessagesUntrashQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesUntrashQueryParams, _super);
    function GmailUsersMessagesUntrashQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersMessagesUntrashQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersMessagesUntrashQueryParams;
}(SpeakeasyBase));
export { GmailUsersMessagesUntrashQueryParams };
var GmailUsersMessagesUntrashSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesUntrashSecurityOption1, _super);
    function GmailUsersMessagesUntrashSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesUntrashSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesUntrashSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersMessagesUntrashSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersMessagesUntrashSecurityOption1 };
var GmailUsersMessagesUntrashSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesUntrashSecurityOption2, _super);
    function GmailUsersMessagesUntrashSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesUntrashSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesUntrashSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersMessagesUntrashSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersMessagesUntrashSecurityOption2 };
var GmailUsersMessagesUntrashSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesUntrashSecurity, _super);
    function GmailUsersMessagesUntrashSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesUntrashSecurityOption1)
    ], GmailUsersMessagesUntrashSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesUntrashSecurityOption2)
    ], GmailUsersMessagesUntrashSecurity.prototype, "option2", void 0);
    return GmailUsersMessagesUntrashSecurity;
}(SpeakeasyBase));
export { GmailUsersMessagesUntrashSecurity };
var GmailUsersMessagesUntrashRequest = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesUntrashRequest, _super);
    function GmailUsersMessagesUntrashRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesUntrashPathParams)
    ], GmailUsersMessagesUntrashRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesUntrashQueryParams)
    ], GmailUsersMessagesUntrashRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesUntrashSecurity)
    ], GmailUsersMessagesUntrashRequest.prototype, "security", void 0);
    return GmailUsersMessagesUntrashRequest;
}(SpeakeasyBase));
export { GmailUsersMessagesUntrashRequest };
var GmailUsersMessagesUntrashResponse = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesUntrashResponse, _super);
    function GmailUsersMessagesUntrashResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersMessagesUntrashResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], GmailUsersMessagesUntrashResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersMessagesUntrashResponse.prototype, "statusCode", void 0);
    return GmailUsersMessagesUntrashResponse;
}(SpeakeasyBase));
export { GmailUsersMessagesUntrashResponse };
