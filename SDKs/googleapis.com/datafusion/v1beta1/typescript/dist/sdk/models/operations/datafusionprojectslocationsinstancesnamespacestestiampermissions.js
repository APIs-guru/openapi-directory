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
var DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams, _super);
    function DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams };
var DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams, _super);
    function DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams };
var DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity, _super);
    function DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity };
var DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest, _super);
    function DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsPathParams)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsQueryParams)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsSecurity)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest.prototype, "security", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsRequest };
var DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse, _super);
    function DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse;
}(SpeakeasyBase));
export { DatafusionProjectsLocationsInstancesNamespacesTestIamPermissionsResponse };
