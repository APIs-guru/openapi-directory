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
var DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersPathParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersPathParams, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersPathParams.prototype, "location", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersPathParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersPathParams };
var DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domainName" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "domainName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams.prototype, "uploadProtocol", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams };
var DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity.prototype, "oauth2c", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity };
var DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersPathParams)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersQueryParams)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest.prototype, "security", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest };
var DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse = /** @class */ (function (_super) {
    __extends(DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse, _super);
    function DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RetrieveRegisterParametersResponse)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse.prototype, "retrieveRegisterParametersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse.prototype, "statusCode", void 0);
    return DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse;
}(SpeakeasyBase));
export { DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersResponse };
