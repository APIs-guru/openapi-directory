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
var GmailUsersMessagesTrashPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesTrashPathParams, _super);
    function GmailUsersMessagesTrashPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashPathParams.prototype, "userId", void 0);
    return GmailUsersMessagesTrashPathParams;
}(SpeakeasyBase));
export { GmailUsersMessagesTrashPathParams };
var GmailUsersMessagesTrashQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesTrashQueryParams, _super);
    function GmailUsersMessagesTrashQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersMessagesTrashQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersMessagesTrashQueryParams;
}(SpeakeasyBase));
export { GmailUsersMessagesTrashQueryParams };
var GmailUsersMessagesTrashSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesTrashSecurityOption1, _super);
    function GmailUsersMessagesTrashSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesTrashSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesTrashSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersMessagesTrashSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersMessagesTrashSecurityOption1 };
var GmailUsersMessagesTrashSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesTrashSecurityOption2, _super);
    function GmailUsersMessagesTrashSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesTrashSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesTrashSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersMessagesTrashSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersMessagesTrashSecurityOption2 };
var GmailUsersMessagesTrashSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesTrashSecurity, _super);
    function GmailUsersMessagesTrashSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesTrashSecurityOption1)
    ], GmailUsersMessagesTrashSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesTrashSecurityOption2)
    ], GmailUsersMessagesTrashSecurity.prototype, "option2", void 0);
    return GmailUsersMessagesTrashSecurity;
}(SpeakeasyBase));
export { GmailUsersMessagesTrashSecurity };
var GmailUsersMessagesTrashRequest = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesTrashRequest, _super);
    function GmailUsersMessagesTrashRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesTrashPathParams)
    ], GmailUsersMessagesTrashRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesTrashQueryParams)
    ], GmailUsersMessagesTrashRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesTrashSecurity)
    ], GmailUsersMessagesTrashRequest.prototype, "security", void 0);
    return GmailUsersMessagesTrashRequest;
}(SpeakeasyBase));
export { GmailUsersMessagesTrashRequest };
var GmailUsersMessagesTrashResponse = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesTrashResponse, _super);
    function GmailUsersMessagesTrashResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersMessagesTrashResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], GmailUsersMessagesTrashResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersMessagesTrashResponse.prototype, "statusCode", void 0);
    return GmailUsersMessagesTrashResponse;
}(SpeakeasyBase));
export { GmailUsersMessagesTrashResponse };
