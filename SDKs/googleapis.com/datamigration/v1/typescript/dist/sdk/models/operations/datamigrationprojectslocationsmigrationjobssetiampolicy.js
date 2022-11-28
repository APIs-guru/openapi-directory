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
var DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams, _super);
    function DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams.prototype, "resource", void 0);
    return DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams };
var DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams, _super);
    function DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams };
var DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity, _super);
    function DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity.prototype, "oauth2c", void 0);
    return DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity };
var DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest, _super);
    function DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsSetIamPolicyPathParams)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsSetIamPolicyQueryParams)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SetIamPolicyRequest)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatamigrationProjectsLocationsMigrationJobsSetIamPolicySecurity)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest.prototype, "security", void 0);
    return DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest };
var DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse, _super);
    function DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Policy)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse.prototype, "statusCode", void 0);
    return DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse;
}(SpeakeasyBase));
export { DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse };
