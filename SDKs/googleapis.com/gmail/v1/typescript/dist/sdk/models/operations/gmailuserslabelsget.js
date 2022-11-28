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
var GmailUsersLabelsGetPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsGetPathParams, _super);
    function GmailUsersLabelsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetPathParams.prototype, "userId", void 0);
    return GmailUsersLabelsGetPathParams;
}(SpeakeasyBase));
export { GmailUsersLabelsGetPathParams };
var GmailUsersLabelsGetQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsGetQueryParams, _super);
    function GmailUsersLabelsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersLabelsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersLabelsGetQueryParams;
}(SpeakeasyBase));
export { GmailUsersLabelsGetQueryParams };
var GmailUsersLabelsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsGetSecurityOption1, _super);
    function GmailUsersLabelsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsGetSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersLabelsGetSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersLabelsGetSecurityOption1 };
var GmailUsersLabelsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsGetSecurityOption2, _super);
    function GmailUsersLabelsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsGetSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersLabelsGetSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersLabelsGetSecurityOption2 };
var GmailUsersLabelsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsGetSecurityOption3, _super);
    function GmailUsersLabelsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsGetSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersLabelsGetSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersLabelsGetSecurityOption3 };
var GmailUsersLabelsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsGetSecurityOption4, _super);
    function GmailUsersLabelsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsGetSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersLabelsGetSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersLabelsGetSecurityOption4 };
var GmailUsersLabelsGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsGetSecurityOption5, _super);
    function GmailUsersLabelsGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersLabelsGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersLabelsGetSecurityOption5.prototype, "oauth2c", void 0);
    return GmailUsersLabelsGetSecurityOption5;
}(SpeakeasyBase));
export { GmailUsersLabelsGetSecurityOption5 };
var GmailUsersLabelsGetSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsGetSecurity, _super);
    function GmailUsersLabelsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsGetSecurityOption1)
    ], GmailUsersLabelsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsGetSecurityOption2)
    ], GmailUsersLabelsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsGetSecurityOption3)
    ], GmailUsersLabelsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsGetSecurityOption4)
    ], GmailUsersLabelsGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersLabelsGetSecurityOption5)
    ], GmailUsersLabelsGetSecurity.prototype, "option5", void 0);
    return GmailUsersLabelsGetSecurity;
}(SpeakeasyBase));
export { GmailUsersLabelsGetSecurity };
var GmailUsersLabelsGetRequest = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsGetRequest, _super);
    function GmailUsersLabelsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsGetPathParams)
    ], GmailUsersLabelsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsGetQueryParams)
    ], GmailUsersLabelsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersLabelsGetSecurity)
    ], GmailUsersLabelsGetRequest.prototype, "security", void 0);
    return GmailUsersLabelsGetRequest;
}(SpeakeasyBase));
export { GmailUsersLabelsGetRequest };
var GmailUsersLabelsGetResponse = /** @class */ (function (_super) {
    __extends(GmailUsersLabelsGetResponse, _super);
    function GmailUsersLabelsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersLabelsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Label)
    ], GmailUsersLabelsGetResponse.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersLabelsGetResponse.prototype, "statusCode", void 0);
    return GmailUsersLabelsGetResponse;
}(SpeakeasyBase));
export { GmailUsersLabelsGetResponse };
