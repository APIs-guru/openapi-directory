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
var SourcerepoProjectsGetConfigPathParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsGetConfigPathParams, _super);
    function SourcerepoProjectsGetConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigPathParams.prototype, "name", void 0);
    return SourcerepoProjectsGetConfigPathParams;
}(SpeakeasyBase));
export { SourcerepoProjectsGetConfigPathParams };
var SourcerepoProjectsGetConfigQueryParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsGetConfigQueryParams, _super);
    function SourcerepoProjectsGetConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SourcerepoProjectsGetConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigQueryParams.prototype, "uploadProtocol", void 0);
    return SourcerepoProjectsGetConfigQueryParams;
}(SpeakeasyBase));
export { SourcerepoProjectsGetConfigQueryParams };
var SourcerepoProjectsGetConfigSecurity = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsGetConfigSecurity, _super);
    function SourcerepoProjectsGetConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsGetConfigSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsGetConfigSecurity.prototype, "oauth2c", void 0);
    return SourcerepoProjectsGetConfigSecurity;
}(SpeakeasyBase));
export { SourcerepoProjectsGetConfigSecurity };
var SourcerepoProjectsGetConfigRequest = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsGetConfigRequest, _super);
    function SourcerepoProjectsGetConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsGetConfigPathParams)
    ], SourcerepoProjectsGetConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsGetConfigQueryParams)
    ], SourcerepoProjectsGetConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", SourcerepoProjectsGetConfigSecurity)
    ], SourcerepoProjectsGetConfigRequest.prototype, "security", void 0);
    return SourcerepoProjectsGetConfigRequest;
}(SpeakeasyBase));
export { SourcerepoProjectsGetConfigRequest };
var SourcerepoProjectsGetConfigResponse = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsGetConfigResponse, _super);
    function SourcerepoProjectsGetConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SourcerepoProjectsGetConfigResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ProjectConfig)
    ], SourcerepoProjectsGetConfigResponse.prototype, "projectConfig", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SourcerepoProjectsGetConfigResponse.prototype, "statusCode", void 0);
    return SourcerepoProjectsGetConfigResponse;
}(SpeakeasyBase));
export { SourcerepoProjectsGetConfigResponse };
