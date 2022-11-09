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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var SourcerepoProjectsReposGetPathParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetPathParams, _super);
    function SourcerepoProjectsReposGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetPathParams.prototype, "name", void 0);
    return SourcerepoProjectsReposGetPathParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetPathParams };
var SourcerepoProjectsReposGetQueryParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetQueryParams, _super);
    function SourcerepoProjectsReposGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SourcerepoProjectsReposGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetQueryParams.prototype, "uploadProtocol", void 0);
    return SourcerepoProjectsReposGetQueryParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetQueryParams };
var SourcerepoProjectsReposGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetSecurityOption1, _super);
    function SourcerepoProjectsReposGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposGetSecurityOption1.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposGetSecurityOption1;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetSecurityOption1 };
var SourcerepoProjectsReposGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetSecurityOption2, _super);
    function SourcerepoProjectsReposGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposGetSecurityOption2.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposGetSecurityOption2;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetSecurityOption2 };
var SourcerepoProjectsReposGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetSecurityOption3, _super);
    function SourcerepoProjectsReposGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposGetSecurityOption3.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposGetSecurityOption3;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetSecurityOption3 };
var SourcerepoProjectsReposGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetSecurityOption4, _super);
    function SourcerepoProjectsReposGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposGetSecurityOption4.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposGetSecurityOption4;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetSecurityOption4 };
var SourcerepoProjectsReposGetSecurity = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetSecurity, _super);
    function SourcerepoProjectsReposGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposGetSecurityOption1)
    ], SourcerepoProjectsReposGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposGetSecurityOption2)
    ], SourcerepoProjectsReposGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposGetSecurityOption3)
    ], SourcerepoProjectsReposGetSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposGetSecurityOption4)
    ], SourcerepoProjectsReposGetSecurity.prototype, "option4", void 0);
    return SourcerepoProjectsReposGetSecurity;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetSecurity };
var SourcerepoProjectsReposGetRequest = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetRequest, _super);
    function SourcerepoProjectsReposGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsReposGetPathParams)
    ], SourcerepoProjectsReposGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsReposGetQueryParams)
    ], SourcerepoProjectsReposGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsReposGetSecurity)
    ], SourcerepoProjectsReposGetRequest.prototype, "security", void 0);
    return SourcerepoProjectsReposGetRequest;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetRequest };
var SourcerepoProjectsReposGetResponse = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposGetResponse, _super);
    function SourcerepoProjectsReposGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Repo)
    ], SourcerepoProjectsReposGetResponse.prototype, "repo", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SourcerepoProjectsReposGetResponse.prototype, "statusCode", void 0);
    return SourcerepoProjectsReposGetResponse;
}(SpeakeasyBase));
export { SourcerepoProjectsReposGetResponse };
