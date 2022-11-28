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
var GmailUsersDraftsDeletePathParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsDeletePathParams, _super);
    function GmailUsersDraftsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeletePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeletePathParams.prototype, "userId", void 0);
    return GmailUsersDraftsDeletePathParams;
}(SpeakeasyBase));
export { GmailUsersDraftsDeletePathParams };
var GmailUsersDraftsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsDeleteQueryParams, _super);
    function GmailUsersDraftsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersDraftsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersDraftsDeleteQueryParams;
}(SpeakeasyBase));
export { GmailUsersDraftsDeleteQueryParams };
var GmailUsersDraftsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsDeleteSecurityOption1, _super);
    function GmailUsersDraftsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersDraftsDeleteSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersDraftsDeleteSecurityOption1 };
var GmailUsersDraftsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsDeleteSecurityOption2, _super);
    function GmailUsersDraftsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersDraftsDeleteSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersDraftsDeleteSecurityOption2 };
var GmailUsersDraftsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsDeleteSecurityOption3, _super);
    function GmailUsersDraftsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersDraftsDeleteSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersDraftsDeleteSecurityOption3 };
var GmailUsersDraftsDeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsDeleteSecurityOption4, _super);
    function GmailUsersDraftsDeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsDeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsDeleteSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersDraftsDeleteSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersDraftsDeleteSecurityOption4 };
var GmailUsersDraftsDeleteSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsDeleteSecurity, _super);
    function GmailUsersDraftsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsDeleteSecurityOption1)
    ], GmailUsersDraftsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsDeleteSecurityOption2)
    ], GmailUsersDraftsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsDeleteSecurityOption3)
    ], GmailUsersDraftsDeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsDeleteSecurityOption4)
    ], GmailUsersDraftsDeleteSecurity.prototype, "option4", void 0);
    return GmailUsersDraftsDeleteSecurity;
}(SpeakeasyBase));
export { GmailUsersDraftsDeleteSecurity };
var GmailUsersDraftsDeleteRequest = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsDeleteRequest, _super);
    function GmailUsersDraftsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsDeletePathParams)
    ], GmailUsersDraftsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsDeleteQueryParams)
    ], GmailUsersDraftsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsDeleteSecurity)
    ], GmailUsersDraftsDeleteRequest.prototype, "security", void 0);
    return GmailUsersDraftsDeleteRequest;
}(SpeakeasyBase));
export { GmailUsersDraftsDeleteRequest };
var GmailUsersDraftsDeleteResponse = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsDeleteResponse, _super);
    function GmailUsersDraftsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersDraftsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersDraftsDeleteResponse.prototype, "statusCode", void 0);
    return GmailUsersDraftsDeleteResponse;
}(SpeakeasyBase));
export { GmailUsersDraftsDeleteResponse };
