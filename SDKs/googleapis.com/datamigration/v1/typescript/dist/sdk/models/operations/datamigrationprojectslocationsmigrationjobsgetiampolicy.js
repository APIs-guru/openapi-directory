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
var DatamigrationProjectsLocationsMigrationJobsGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsGetIamPolicyPathParams, _super);
    function DatamigrationProjectsLocationsMigrationJobsGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyPathParams.prototype, "resource", void 0);
    return DatamigrationProjectsLocationsMigrationJobsGetIamPolicyPathParams;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsGetIamPolicyPathParams };
var DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams, _super);
    function DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams };
var DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity, _super);
    function DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity };
var DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest, _super);
    function DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsGetIamPolicyPathParams)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsGetIamPolicyQueryParams)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsGetIamPolicySecurity)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest.prototype, "security", void 0);
    return DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest };
var DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse, _super);
    function DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse.prototype, "statusCode", void 0);
    return DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse };
