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
var ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeletePathParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeletePathParams, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeletePathParams.prototype, "name", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeletePathParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeletePathParams };
var ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams };
var ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity.prototype, "oauth2c", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity };
var ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeletePathParams)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteQueryParams)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteSecurity)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest.prototype, "security", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteRequest };
var ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse.prototype, "statusCode", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesEndpointsDeleteResponse };
