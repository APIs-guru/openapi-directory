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
var GmailUsersThreadsModifyPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsModifyPathParams, _super);
    function GmailUsersThreadsModifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyPathParams.prototype, "userId", void 0);
    return GmailUsersThreadsModifyPathParams;
}(SpeakeasyBase));
export { GmailUsersThreadsModifyPathParams };
var GmailUsersThreadsModifyQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsModifyQueryParams, _super);
    function GmailUsersThreadsModifyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersThreadsModifyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersThreadsModifyQueryParams;
}(SpeakeasyBase));
export { GmailUsersThreadsModifyQueryParams };
var GmailUsersThreadsModifySecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsModifySecurityOption1, _super);
    function GmailUsersThreadsModifySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsModifySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsModifySecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersThreadsModifySecurityOption1;
}(SpeakeasyBase));
export { GmailUsersThreadsModifySecurityOption1 };
var GmailUsersThreadsModifySecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsModifySecurityOption2, _super);
    function GmailUsersThreadsModifySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersThreadsModifySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersThreadsModifySecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersThreadsModifySecurityOption2;
}(SpeakeasyBase));
export { GmailUsersThreadsModifySecurityOption2 };
var GmailUsersThreadsModifySecurity = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsModifySecurity, _super);
    function GmailUsersThreadsModifySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsModifySecurityOption1)
    ], GmailUsersThreadsModifySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersThreadsModifySecurityOption2)
    ], GmailUsersThreadsModifySecurity.prototype, "option2", void 0);
    return GmailUsersThreadsModifySecurity;
}(SpeakeasyBase));
export { GmailUsersThreadsModifySecurity };
var GmailUsersThreadsModifyRequest = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsModifyRequest, _super);
    function GmailUsersThreadsModifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsModifyPathParams)
    ], GmailUsersThreadsModifyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsModifyQueryParams)
    ], GmailUsersThreadsModifyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ModifyThreadRequest)
    ], GmailUsersThreadsModifyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersThreadsModifySecurity)
    ], GmailUsersThreadsModifyRequest.prototype, "security", void 0);
    return GmailUsersThreadsModifyRequest;
}(SpeakeasyBase));
export { GmailUsersThreadsModifyRequest };
var GmailUsersThreadsModifyResponse = /** @class */ (function (_super) {
    __extends(GmailUsersThreadsModifyResponse, _super);
    function GmailUsersThreadsModifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersThreadsModifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersThreadsModifyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Thread)
    ], GmailUsersThreadsModifyResponse.prototype, "thread", void 0);
    return GmailUsersThreadsModifyResponse;
}(SpeakeasyBase));
export { GmailUsersThreadsModifyResponse };
