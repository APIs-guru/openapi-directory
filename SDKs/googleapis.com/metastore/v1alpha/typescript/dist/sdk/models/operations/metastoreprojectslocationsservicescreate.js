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
var MetastoreProjectsLocationsServicesCreatePathParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesCreatePathParams, _super);
    function MetastoreProjectsLocationsServicesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreatePathParams.prototype, "parent", void 0);
    return MetastoreProjectsLocationsServicesCreatePathParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesCreatePathParams };
var MetastoreProjectsLocationsServicesCreateQueryParams = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesCreateQueryParams, _super);
    function MetastoreProjectsLocationsServicesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=serviceId" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "serviceId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return MetastoreProjectsLocationsServicesCreateQueryParams;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesCreateQueryParams };
var MetastoreProjectsLocationsServicesCreateSecurity = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesCreateSecurity, _super);
    function MetastoreProjectsLocationsServicesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MetastoreProjectsLocationsServicesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MetastoreProjectsLocationsServicesCreateSecurity.prototype, "oauth2c", void 0);
    return MetastoreProjectsLocationsServicesCreateSecurity;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesCreateSecurity };
var MetastoreProjectsLocationsServicesCreateRequest = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesCreateRequest, _super);
    function MetastoreProjectsLocationsServicesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesCreatePathParams)
    ], MetastoreProjectsLocationsServicesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesCreateQueryParams)
    ], MetastoreProjectsLocationsServicesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Service)
    ], MetastoreProjectsLocationsServicesCreateRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", MetastoreProjectsLocationsServicesCreateSecurity)
    ], MetastoreProjectsLocationsServicesCreateRequest.prototype, "security", void 0);
    return MetastoreProjectsLocationsServicesCreateRequest;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesCreateRequest };
var MetastoreProjectsLocationsServicesCreateResponse = /** @class */ (function (_super) {
    __extends(MetastoreProjectsLocationsServicesCreateResponse, _super);
    function MetastoreProjectsLocationsServicesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], MetastoreProjectsLocationsServicesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], MetastoreProjectsLocationsServicesCreateResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], MetastoreProjectsLocationsServicesCreateResponse.prototype, "statusCode", void 0);
    return MetastoreProjectsLocationsServicesCreateResponse;
}(SpeakeasyBase));
export { MetastoreProjectsLocationsServicesCreateResponse };
