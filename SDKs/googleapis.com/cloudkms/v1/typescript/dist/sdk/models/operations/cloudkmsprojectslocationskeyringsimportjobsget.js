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
var CloudkmsProjectsLocationsKeyRingsImportJobsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetPathParams, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetPathParams.prototype, "name", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetPathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetPathParams };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1 };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2 };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsGetPathParams)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsGetQueryParams)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest };
var CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ImportJob)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse.prototype, "importJob", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse };
