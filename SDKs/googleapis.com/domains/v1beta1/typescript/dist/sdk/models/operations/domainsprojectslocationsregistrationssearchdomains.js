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
var DomainsProjectsLocationsRegistrationsSearchDomainsPathParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsSearchDomainsPathParams, _super);
    function DomainsProjectsLocationsRegistrationsSearchDomainsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsPathParams.prototype, "location", void 0);
    return DomainsProjectsLocationsRegistrationsSearchDomainsPathParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsSearchDomainsPathParams };
var DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams, _super);
    function DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams.prototype, "uploadProtocol", void 0);
    return DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams };
var DomainsProjectsLocationsRegistrationsSearchDomainsSecurity = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsSearchDomainsSecurity, _super);
    function DomainsProjectsLocationsRegistrationsSearchDomainsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsSecurity.prototype, "oauth2c", void 0);
    return DomainsProjectsLocationsRegistrationsSearchDomainsSecurity;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsSearchDomainsSecurity };
var DomainsProjectsLocationsRegistrationsSearchDomainsRequest = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsSearchDomainsRequest, _super);
    function DomainsProjectsLocationsRegistrationsSearchDomainsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsSearchDomainsPathParams)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsSearchDomainsQueryParams)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsSearchDomainsSecurity)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsRequest.prototype, "security", void 0);
    return DomainsProjectsLocationsRegistrationsSearchDomainsRequest;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsSearchDomainsRequest };
var DomainsProjectsLocationsRegistrationsSearchDomainsResponse = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsSearchDomainsResponse, _super);
    function DomainsProjectsLocationsRegistrationsSearchDomainsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchDomainsResponse)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsResponse.prototype, "searchDomainsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DomainsProjectsLocationsRegistrationsSearchDomainsResponse.prototype, "statusCode", void 0);
    return DomainsProjectsLocationsRegistrationsSearchDomainsResponse;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsSearchDomainsResponse };
