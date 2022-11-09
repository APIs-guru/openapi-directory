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
var ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetPathParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetPathParams, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetPathParams.prototype, "name", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetPathParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetPathParams };
var ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams };
var ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity.prototype, "oauth2c", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity };
var ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetPathParams)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetQueryParams)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetSecurity)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest.prototype, "security", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetRequest };
var ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Endpoint)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse.prototype, "endpoint", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse.prototype, "statusCode", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesEndpointsGetResponse };
