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
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListPathParams, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListPathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListPathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListPathParams };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1 };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2 };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption1)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurityOption2)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListPathParams)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListQueryParams)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListSecurity)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest.prototype, "security", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListRequest };
var ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListPeeredDnsDomainsResponse)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse.prototype, "listPeeredDnsDomainsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksPeeredDnsDomainsListResponse };
