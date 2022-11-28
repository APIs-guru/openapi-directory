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
var GmailUsersLabelsCreatePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsCreatePathParams, _super);
    function GmailUsersLabelsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreatePathParams.prototype, "userId", void 0);
    return GmailUsersLabelsCreatePathParams;
}(SpeakeasyBase));
export { GmailUsersLabelsCreatePathParams };
var GmailUsersLabelsCreateQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsCreateQueryParams, _super);
    function GmailUsersLabelsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersLabelsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersLabelsCreateQueryParams;
}(SpeakeasyBase));
export { GmailUsersLabelsCreateQueryParams };
var GmailUsersLabelsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsCreateSecurityOption1, _super);
    function GmailUsersLabelsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersLabelsCreateSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersLabelsCreateSecurityOption1 };
var GmailUsersLabelsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsCreateSecurityOption2, _super);
    function GmailUsersLabelsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersLabelsCreateSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersLabelsCreateSecurityOption2 };
var GmailUsersLabelsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsCreateSecurityOption3, _super);
    function GmailUsersLabelsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersLabelsCreateSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersLabelsCreateSecurityOption3 };
var GmailUsersLabelsCreateSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsCreateSecurity, _super);
    function GmailUsersLabelsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsCreateSecurityOption1)
    ], GmailUsersLabelsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsCreateSecurityOption2)
    ], GmailUsersLabelsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsCreateSecurityOption3)
    ], GmailUsersLabelsCreateSecurity.prototype, "option3", void 0);
    return GmailUsersLabelsCreateSecurity;
}(SpeakeasyBase));
export { GmailUsersLabelsCreateSecurity };
var GmailUsersLabelsCreateRequest = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsCreateRequest, _super);
    function GmailUsersLabelsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsCreatePathParams)
    ], GmailUsersLabelsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsCreateQueryParams)
    ], GmailUsersLabelsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Label)
    ], GmailUsersLabelsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsCreateSecurity)
    ], GmailUsersLabelsCreateRequest.prototype, "security", void 0);
    return GmailUsersLabelsCreateRequest;
}(SpeakeasyBase));
export { GmailUsersLabelsCreateRequest };
var GmailUsersLabelsCreateResponse = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsCreateResponse, _super);
    function GmailUsersLabelsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersLabelsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Label)
    ], GmailUsersLabelsCreateResponse.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersLabelsCreateResponse.prototype, "statusCode", void 0);
    return GmailUsersLabelsCreateResponse;
}(SpeakeasyBase));
export { GmailUsersLabelsCreateResponse };
