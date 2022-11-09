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
var ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsPathParams, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsPathParams };
var ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams };
var ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity };
var ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsPathParams)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsQueryParams)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsSecurity)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest.prototype, "security", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsRequest };
var ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesTestIamPermissionsResponse };
