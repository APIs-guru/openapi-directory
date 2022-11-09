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
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams.prototype, "resource", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsPathParams)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsQueryParams)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsSecurity)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest.prototype, "security", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest };
var GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse, _super);
    function GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse;
}(SpeakeasyBase));
export { GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse };
