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
var CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams };
var CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams };
var CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1 };
var CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2 };
var CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity };
var CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsPathParams)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsQueryParams)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest };
var CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse };
