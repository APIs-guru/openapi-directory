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
var GmailUsersLabelsPatchPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsPatchPathParams, _super);
    function GmailUsersLabelsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchPathParams.prototype, "userId", void 0);
    return GmailUsersLabelsPatchPathParams;
}(SpeakeasyBase));
export { GmailUsersLabelsPatchPathParams };
var GmailUsersLabelsPatchQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsPatchQueryParams, _super);
    function GmailUsersLabelsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersLabelsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersLabelsPatchQueryParams;
}(SpeakeasyBase));
export { GmailUsersLabelsPatchQueryParams };
var GmailUsersLabelsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsPatchSecurityOption1, _super);
    function GmailUsersLabelsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersLabelsPatchSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersLabelsPatchSecurityOption1 };
var GmailUsersLabelsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsPatchSecurityOption2, _super);
    function GmailUsersLabelsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersLabelsPatchSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersLabelsPatchSecurityOption2 };
var GmailUsersLabelsPatchSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsPatchSecurityOption3, _super);
    function GmailUsersLabelsPatchSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsPatchSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsPatchSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersLabelsPatchSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersLabelsPatchSecurityOption3 };
var GmailUsersLabelsPatchSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsPatchSecurity, _super);
    function GmailUsersLabelsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsPatchSecurityOption1)
    ], GmailUsersLabelsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsPatchSecurityOption2)
    ], GmailUsersLabelsPatchSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsPatchSecurityOption3)
    ], GmailUsersLabelsPatchSecurity.prototype, "option3", void 0);
    return GmailUsersLabelsPatchSecurity;
}(SpeakeasyBase));
export { GmailUsersLabelsPatchSecurity };
var GmailUsersLabelsPatchRequest = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsPatchRequest, _super);
    function GmailUsersLabelsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsPatchPathParams)
    ], GmailUsersLabelsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsPatchQueryParams)
    ], GmailUsersLabelsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Label)
    ], GmailUsersLabelsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsPatchSecurity)
    ], GmailUsersLabelsPatchRequest.prototype, "security", void 0);
    return GmailUsersLabelsPatchRequest;
}(SpeakeasyBase));
export { GmailUsersLabelsPatchRequest };
var GmailUsersLabelsPatchResponse = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsPatchResponse, _super);
    function GmailUsersLabelsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersLabelsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Label)
    ], GmailUsersLabelsPatchResponse.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersLabelsPatchResponse.prototype, "statusCode", void 0);
    return GmailUsersLabelsPatchResponse;
}(SpeakeasyBase));
export { GmailUsersLabelsPatchResponse };
