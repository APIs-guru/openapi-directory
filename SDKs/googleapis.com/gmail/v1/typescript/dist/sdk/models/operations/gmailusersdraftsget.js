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
var GmailUsersDraftsGetPathParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsGetPathParams, _super);
    function GmailUsersDraftsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetPathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetPathParams.prototype, "userId", void 0);
    return GmailUsersDraftsGetPathParams;
}(SpeakeasyBase));
export { GmailUsersDraftsGetPathParams };
export var GmailUsersDraftsGetFormatEnum;
(function (GmailUsersDraftsGetFormatEnum) {
    GmailUsersDraftsGetFormatEnum["Minimal"] = "minimal";
    GmailUsersDraftsGetFormatEnum["Full"] = "full";
    GmailUsersDraftsGetFormatEnum["Raw"] = "raw";
    GmailUsersDraftsGetFormatEnum["Metadata"] = "metadata";
})(GmailUsersDraftsGetFormatEnum || (GmailUsersDraftsGetFormatEnum = {}));
var GmailUsersDraftsGetQueryParams = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsGetQueryParams, _super);
    function GmailUsersDraftsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetQueryParams.prototype, "format", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GmailUsersDraftsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetQueryParams.prototype, "uploadProtocol", void 0);
    return GmailUsersDraftsGetQueryParams;
}(SpeakeasyBase));
export { GmailUsersDraftsGetQueryParams };
var GmailUsersDraftsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsGetSecurityOption1, _super);
    function GmailUsersDraftsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsGetSecurityOption1.prototype, "oauth2c", void 0);
    return GmailUsersDraftsGetSecurityOption1;
}(SpeakeasyBase));
export { GmailUsersDraftsGetSecurityOption1 };
var GmailUsersDraftsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsGetSecurityOption2, _super);
    function GmailUsersDraftsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsGetSecurityOption2.prototype, "oauth2c", void 0);
    return GmailUsersDraftsGetSecurityOption2;
}(SpeakeasyBase));
export { GmailUsersDraftsGetSecurityOption2 };
var GmailUsersDraftsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsGetSecurityOption3, _super);
    function GmailUsersDraftsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsGetSecurityOption3.prototype, "oauth2c", void 0);
    return GmailUsersDraftsGetSecurityOption3;
}(SpeakeasyBase));
export { GmailUsersDraftsGetSecurityOption3 };
var GmailUsersDraftsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsGetSecurityOption4, _super);
    function GmailUsersDraftsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GmailUsersDraftsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GmailUsersDraftsGetSecurityOption4.prototype, "oauth2c", void 0);
    return GmailUsersDraftsGetSecurityOption4;
}(SpeakeasyBase));
export { GmailUsersDraftsGetSecurityOption4 };
var GmailUsersDraftsGetSecurity = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsGetSecurity, _super);
    function GmailUsersDraftsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsGetSecurityOption1)
    ], GmailUsersDraftsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsGetSecurityOption2)
    ], GmailUsersDraftsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsGetSecurityOption3)
    ], GmailUsersDraftsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", GmailUsersDraftsGetSecurityOption4)
    ], GmailUsersDraftsGetSecurity.prototype, "option4", void 0);
    return GmailUsersDraftsGetSecurity;
}(SpeakeasyBase));
export { GmailUsersDraftsGetSecurity };
var GmailUsersDraftsGetRequest = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsGetRequest, _super);
    function GmailUsersDraftsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsGetPathParams)
    ], GmailUsersDraftsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsGetQueryParams)
    ], GmailUsersDraftsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GmailUsersDraftsGetSecurity)
    ], GmailUsersDraftsGetRequest.prototype, "security", void 0);
    return GmailUsersDraftsGetRequest;
}(SpeakeasyBase));
export { GmailUsersDraftsGetRequest };
var GmailUsersDraftsGetResponse = /** @class */ (function (_super) {
    __extends(GmailUsersDraftsGetResponse, _super);
    function GmailUsersDraftsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GmailUsersDraftsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Draft)
    ], GmailUsersDraftsGetResponse.prototype, "draft", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GmailUsersDraftsGetResponse.prototype, "statusCode", void 0);
    return GmailUsersDraftsGetResponse;
}(SpeakeasyBase));
export { GmailUsersDraftsGetResponse };
