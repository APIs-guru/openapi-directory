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
var ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams.prototype, "name", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams };
var ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams.prototype, "uploadProtocol", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams };
var ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity.prototype, "oauth2c", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity };
var ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesResolvePathParams)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesResolveQueryParams)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResolveServiceRequest)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesServicesResolveSecurity)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest.prototype, "security", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesResolveRequest };
var ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse, _super);
    function ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ResolveServiceResponse)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse.prototype, "resolveServiceResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse.prototype, "statusCode", void 0);
    return ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesServicesResolveResponse };
