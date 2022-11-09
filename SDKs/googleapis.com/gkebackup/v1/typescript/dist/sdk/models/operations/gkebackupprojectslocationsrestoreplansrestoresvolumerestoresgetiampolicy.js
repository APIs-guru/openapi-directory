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
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyPathParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyPathParams, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyPathParams.prototype, "resource", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyPathParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyPathParams };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=options.requestedPolicyVersion" }),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "optionsRequestedPolicyVersion", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams.prototype, "uploadProtocol", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity.prototype, "oauth2c", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyPathParams)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyQueryParams)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicySecurity)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest.prototype, "security", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Policy)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse.prototype, "policy", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse.prototype, "statusCode", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse };
