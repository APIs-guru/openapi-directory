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
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreatePathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreatePathParams, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreatePathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreatePathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreatePathParams };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1 };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2 };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption1)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurityOption2)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreatePathParams)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateQueryParams)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PeeredDnsDomain)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateSecurity)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest.prototype, "security", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateRequest };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsCreateResponse };
