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
var SourcerepoProjectsReposDeletePathParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposDeletePathParams, _super);
    function SourcerepoProjectsReposDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeletePathParams.prototype, "name", void 0);
    return SourcerepoProjectsReposDeletePathParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposDeletePathParams };
var SourcerepoProjectsReposDeleteQueryParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposDeleteQueryParams, _super);
    function SourcerepoProjectsReposDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SourcerepoProjectsReposDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return SourcerepoProjectsReposDeleteQueryParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposDeleteQueryParams };
var SourcerepoProjectsReposDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposDeleteSecurityOption1, _super);
    function SourcerepoProjectsReposDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposDeleteSecurityOption1;
}(SpeakeasyBase));
export { SourcerepoProjectsReposDeleteSecurityOption1 };
var SourcerepoProjectsReposDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposDeleteSecurityOption2, _super);
    function SourcerepoProjectsReposDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposDeleteSecurityOption2;
}(SpeakeasyBase));
export { SourcerepoProjectsReposDeleteSecurityOption2 };
var SourcerepoProjectsReposDeleteSecurity = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposDeleteSecurity, _super);
    function SourcerepoProjectsReposDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposDeleteSecurityOption1)
    ], SourcerepoProjectsReposDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposDeleteSecurityOption2)
    ], SourcerepoProjectsReposDeleteSecurity.prototype, "option2", void 0);
    return SourcerepoProjectsReposDeleteSecurity;
}(SpeakeasyBase));
export { SourcerepoProjectsReposDeleteSecurity };
var SourcerepoProjectsReposDeleteRequest = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposDeleteRequest, _super);
    function SourcerepoProjectsReposDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsReposDeletePathParams)
    ], SourcerepoProjectsReposDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsReposDeleteQueryParams)
    ], SourcerepoProjectsReposDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsReposDeleteSecurity)
    ], SourcerepoProjectsReposDeleteRequest.prototype, "security", void 0);
    return SourcerepoProjectsReposDeleteRequest;
}(SpeakeasyBase));
export { SourcerepoProjectsReposDeleteRequest };
var SourcerepoProjectsReposDeleteResponse = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposDeleteResponse, _super);
    function SourcerepoProjectsReposDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], SourcerepoProjectsReposDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SourcerepoProjectsReposDeleteResponse.prototype, "statusCode", void 0);
    return SourcerepoProjectsReposDeleteResponse;
}(SpeakeasyBase));
export { SourcerepoProjectsReposDeleteResponse };
