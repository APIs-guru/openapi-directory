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
var GmailUsersMessagesModifyPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesModifyPathParams, _super);
    function GmailUsersMessagesModifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyPathParams.prototype, "userId", void 0);
    return GmailUsersMessagesModifyPathParams;
}(SpeakeasyBase));
export { GmailUsersMessagesModifyPathParams };
var GmailUsersMessagesModifyQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesModifyQueryParams, _super);
    function GmailUsersMessagesModifyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersMessagesModifyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersMessagesModifyQueryParams;
}(SpeakeasyBase));
export { GmailUsersMessagesModifyQueryParams };
var GmailUsersMessagesModifySecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesModifySecurityOption1, _super);
    function GmailUsersMessagesModifySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesModifySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesModifySecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersMessagesModifySecurityOption1;
}(SpeakeasyBase));
export { GmailUsersMessagesModifySecurityOption1 };
var GmailUsersMessagesModifySecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesModifySecurityOption2, _super);
    function GmailUsersMessagesModifySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesModifySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesModifySecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersMessagesModifySecurityOption2;
}(SpeakeasyBase));
export { GmailUsersMessagesModifySecurityOption2 };
var GmailUsersMessagesModifySecurity = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesModifySecurity, _super);
    function GmailUsersMessagesModifySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesModifySecurityOption1)
    ], GmailUsersMessagesModifySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesModifySecurityOption2)
    ], GmailUsersMessagesModifySecurity.prototype, "option2", void 0);
    return GmailUsersMessagesModifySecurity;
}(SpeakeasyBase));
export { GmailUsersMessagesModifySecurity };
var GmailUsersMessagesModifyRequest = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesModifyRequest, _super);
    function GmailUsersMessagesModifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesModifyPathParams)
    ], GmailUsersMessagesModifyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesModifyQueryParams)
    ], GmailUsersMessagesModifyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyMessageRequest)
    ], GmailUsersMessagesModifyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesModifySecurity)
    ], GmailUsersMessagesModifyRequest.prototype, "security", void 0);
    return GmailUsersMessagesModifyRequest;
}(SpeakeasyBase));
export { GmailUsersMessagesModifyRequest };
var GmailUsersMessagesModifyResponse = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesModifyResponse, _super);
    function GmailUsersMessagesModifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersMessagesModifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], GmailUsersMessagesModifyResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersMessagesModifyResponse.prototype, "statusCode", void 0);
    return GmailUsersMessagesModifyResponse;
}(SpeakeasyBase));
export { GmailUsersMessagesModifyResponse };
