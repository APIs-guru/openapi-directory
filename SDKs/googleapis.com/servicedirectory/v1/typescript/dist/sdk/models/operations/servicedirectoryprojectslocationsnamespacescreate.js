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
var ServicedirectoryProjectsLocationsNamespacesCreatePathParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesCreatePathParams, _super);
    function ServicedirectoryProjectsLocationsNamespacesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreatePathParams.prototype, "parent", void 0);
    return ServicedirectoryProjectsLocationsNamespacesCreatePathParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesCreatePathParams };
var ServicedirectoryProjectsLocationsNamespacesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesCreateQueryParams, _super);
    function ServicedirectoryProjectsLocationsNamespacesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=namespaceId" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "namespaceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ServicedirectoryProjectsLocationsNamespacesCreateQueryParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesCreateQueryParams };
var ServicedirectoryProjectsLocationsNamespacesCreateSecurity = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesCreateSecurity, _super);
    function ServicedirectoryProjectsLocationsNamespacesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicedirectoryProjectsLocationsNamespacesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicedirectoryProjectsLocationsNamespacesCreateSecurity.prototype, "oauth2c", void 0);
    return ServicedirectoryProjectsLocationsNamespacesCreateSecurity;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesCreateSecurity };
var ServicedirectoryProjectsLocationsNamespacesCreateRequest = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesCreateRequest, _super);
    function ServicedirectoryProjectsLocationsNamespacesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesCreatePathParams)
    ], ServicedirectoryProjectsLocationsNamespacesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesCreateQueryParams)
    ], ServicedirectoryProjectsLocationsNamespacesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Namespace)
    ], ServicedirectoryProjectsLocationsNamespacesCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsNamespacesCreateSecurity)
    ], ServicedirectoryProjectsLocationsNamespacesCreateRequest.prototype, "security", void 0);
    return ServicedirectoryProjectsLocationsNamespacesCreateRequest;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesCreateRequest };
var ServicedirectoryProjectsLocationsNamespacesCreateResponse = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsNamespacesCreateResponse, _super);
    function ServicedirectoryProjectsLocationsNamespacesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsNamespacesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Namespace)
    ], ServicedirectoryProjectsLocationsNamespacesCreateResponse.prototype, "namespace", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ServicedirectoryProjectsLocationsNamespacesCreateResponse.prototype, "statusCode", void 0);
    return ServicedirectoryProjectsLocationsNamespacesCreateResponse;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsNamespacesCreateResponse };
