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
var GmailUsersLabelsDeletePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsDeletePathParams, _super);
    function GmailUsersLabelsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeletePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeletePathParams.prototype, "userId", void 0);
    return GmailUsersLabelsDeletePathParams;
}(SpeakeasyBase));
export { GmailUsersLabelsDeletePathParams };
var GmailUsersLabelsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsDeleteQueryParams, _super);
    function GmailUsersLabelsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersLabelsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersLabelsDeleteQueryParams;
}(SpeakeasyBase));
export { GmailUsersLabelsDeleteQueryParams };
var GmailUsersLabelsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsDeleteSecurityOption1, _super);
    function GmailUsersLabelsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersLabelsDeleteSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersLabelsDeleteSecurityOption1 };
var GmailUsersLabelsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsDeleteSecurityOption2, _super);
    function GmailUsersLabelsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersLabelsDeleteSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersLabelsDeleteSecurityOption2 };
var GmailUsersLabelsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsDeleteSecurityOption3, _super);
    function GmailUsersLabelsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersLabelsDeleteSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersLabelsDeleteSecurityOption3 };
var GmailUsersLabelsDeleteSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsDeleteSecurity, _super);
    function GmailUsersLabelsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsDeleteSecurityOption1)
    ], GmailUsersLabelsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsDeleteSecurityOption2)
    ], GmailUsersLabelsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsDeleteSecurityOption3)
    ], GmailUsersLabelsDeleteSecurity.prototype, "option3", void 0);
    return GmailUsersLabelsDeleteSecurity;
}(SpeakeasyBase));
export { GmailUsersLabelsDeleteSecurity };
var GmailUsersLabelsDeleteRequest = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsDeleteRequest, _super);
    function GmailUsersLabelsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsDeletePathParams)
    ], GmailUsersLabelsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsDeleteQueryParams)
    ], GmailUsersLabelsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsDeleteSecurity)
    ], GmailUsersLabelsDeleteRequest.prototype, "security", void 0);
    return GmailUsersLabelsDeleteRequest;
}(SpeakeasyBase));
export { GmailUsersLabelsDeleteRequest };
var GmailUsersLabelsDeleteResponse = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsDeleteResponse, _super);
    function GmailUsersLabelsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersLabelsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersLabelsDeleteResponse.prototype, "statusCode", void 0);
    return GmailUsersLabelsDeleteResponse;
}(SpeakeasyBase));
export { GmailUsersLabelsDeleteResponse };
