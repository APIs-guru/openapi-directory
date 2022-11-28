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
var DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsPathParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsPathParams, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsPathParams.prototype, "location", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsPathParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsPathParams };
var DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams.prototype, "uploadProtocol", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams };
var DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity.prototype, "oauth2c", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity };
var DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsPathParams)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsQueryParams)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest.prototype, "security", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest };
var DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetrieveImportableDomainsResponse)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse.prototype, "retrieveImportableDomainsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse.prototype, "statusCode", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsResponse };
