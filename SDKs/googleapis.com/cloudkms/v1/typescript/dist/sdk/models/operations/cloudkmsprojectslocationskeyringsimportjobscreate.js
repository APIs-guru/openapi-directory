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
var CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams.prototype, "parent", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams };
var CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=importJobId" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "importJobId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams };
var CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1 };
var CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2 };
var CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity.prototype, "option2", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity };
var CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsCreatePathParams)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsCreateQueryParams)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImportJobInput)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest.prototype, "security", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest };
var CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse, _super);
    function CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImportJob)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse.prototype, "importJob", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse.prototype, "statusCode", void 0);
    return CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse;
}(SpeakeasyBase));
export { CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse };
