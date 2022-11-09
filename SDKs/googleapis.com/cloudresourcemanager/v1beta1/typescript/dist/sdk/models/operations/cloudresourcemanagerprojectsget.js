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
var CloudresourcemanagerProjectsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetPathParams, _super);
    function CloudresourcemanagerProjectsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetPathParams.prototype, "projectId", void 0);
    return CloudresourcemanagerProjectsGetPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetPathParams };
var CloudresourcemanagerProjectsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetQueryParams, _super);
    function CloudresourcemanagerProjectsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerProjectsGetQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetQueryParams };
var CloudresourcemanagerProjectsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetSecurityOption1, _super);
    function CloudresourcemanagerProjectsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetSecurityOption1 };
var CloudresourcemanagerProjectsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetSecurityOption2, _super);
    function CloudresourcemanagerProjectsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetSecurityOption2 };
var CloudresourcemanagerProjectsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetSecurity, _super);
    function CloudresourcemanagerProjectsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsGetSecurityOption1)
    ], CloudresourcemanagerProjectsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsGetSecurityOption2)
    ], CloudresourcemanagerProjectsGetSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerProjectsGetSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetSecurity };
var CloudresourcemanagerProjectsGetRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetRequest, _super);
    function CloudresourcemanagerProjectsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetPathParams)
    ], CloudresourcemanagerProjectsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetQueryParams)
    ], CloudresourcemanagerProjectsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerProjectsGetSecurity)
    ], CloudresourcemanagerProjectsGetRequest.prototype, "security", void 0);
    return CloudresourcemanagerProjectsGetRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetRequest };
var CloudresourcemanagerProjectsGetResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsGetResponse, _super);
    function CloudresourcemanagerProjectsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Project)
    ], CloudresourcemanagerProjectsGetResponse.prototype, "project", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsGetResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerProjectsGetResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsGetResponse };
