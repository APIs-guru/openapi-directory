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
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeletePathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeletePathParams, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeletePathParams.prototype, "name", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeletePathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeletePathParams };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1 };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2 };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption1)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurityOption2)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeletePathParams)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteQueryParams)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteSecurity)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest.prototype, "security", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteRequest };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsDeleteResponse };
