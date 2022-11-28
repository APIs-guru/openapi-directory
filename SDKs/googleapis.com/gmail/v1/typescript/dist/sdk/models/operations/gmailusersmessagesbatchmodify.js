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
var GmailUsersMessagesBatchModifyPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesBatchModifyPathParams, _super);
    function GmailUsersMessagesBatchModifyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyPathParams.prototype, "userId", void 0);
    return GmailUsersMessagesBatchModifyPathParams;
}(SpeakeasyBase));
export { GmailUsersMessagesBatchModifyPathParams };
var GmailUsersMessagesBatchModifyQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesBatchModifyQueryParams, _super);
    function GmailUsersMessagesBatchModifyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersMessagesBatchModifyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersMessagesBatchModifyQueryParams;
}(SpeakeasyBase));
export { GmailUsersMessagesBatchModifyQueryParams };
var GmailUsersMessagesBatchModifySecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesBatchModifySecurityOption1, _super);
    function GmailUsersMessagesBatchModifySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesBatchModifySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesBatchModifySecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersMessagesBatchModifySecurityOption1;
}(SpeakeasyBase));
export { GmailUsersMessagesBatchModifySecurityOption1 };
var GmailUsersMessagesBatchModifySecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesBatchModifySecurityOption2, _super);
    function GmailUsersMessagesBatchModifySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersMessagesBatchModifySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersMessagesBatchModifySecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersMessagesBatchModifySecurityOption2;
}(SpeakeasyBase));
export { GmailUsersMessagesBatchModifySecurityOption2 };
var GmailUsersMessagesBatchModifySecurity = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesBatchModifySecurity, _super);
    function GmailUsersMessagesBatchModifySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesBatchModifySecurityOption1)
    ], GmailUsersMessagesBatchModifySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersMessagesBatchModifySecurityOption2)
    ], GmailUsersMessagesBatchModifySecurity.prototype, "option2", void 0);
    return GmailUsersMessagesBatchModifySecurity;
}(SpeakeasyBase));
export { GmailUsersMessagesBatchModifySecurity };
var GmailUsersMessagesBatchModifyRequest = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesBatchModifyRequest, _super);
    function GmailUsersMessagesBatchModifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesBatchModifyPathParams)
    ], GmailUsersMessagesBatchModifyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesBatchModifyQueryParams)
    ], GmailUsersMessagesBatchModifyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchModifyMessagesRequest)
    ], GmailUsersMessagesBatchModifyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersMessagesBatchModifySecurity)
    ], GmailUsersMessagesBatchModifyRequest.prototype, "security", void 0);
    return GmailUsersMessagesBatchModifyRequest;
}(SpeakeasyBase));
export { GmailUsersMessagesBatchModifyRequest };
var GmailUsersMessagesBatchModifyResponse = /** @class */ (function (_super) {
    __extends(GmailUsersMessagesBatchModifyResponse, _super);
    function GmailUsersMessagesBatchModifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersMessagesBatchModifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersMessagesBatchModifyResponse.prototype, "statusCode", void 0);
    return GmailUsersMessagesBatchModifyResponse;
}(SpeakeasyBase));
export { GmailUsersMessagesBatchModifyResponse };
