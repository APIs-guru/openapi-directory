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
var ServicenetworkingServicesProjectsGlobalNetworksGetPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksGetPathParams, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetPathParams.prototype, "name", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksGetPathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksGetPathParams };
var ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeUsedIpRanges" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "includeUsedIpRanges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams };
var ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1 };
var ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2 };
var ServicenetworkingServicesProjectsGlobalNetworksGetSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksGetSecurity, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption1)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksGetSecurityOption2)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksGetSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksGetSecurity };
var ServicenetworkingServicesProjectsGlobalNetworksGetRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksGetRequest, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksGetPathParams)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksGetQueryParams)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksGetSecurity)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetRequest.prototype, "security", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksGetRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksGetRequest };
var ServicenetworkingServicesProjectsGlobalNetworksGetResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksGetResponse, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ConsumerConfig)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetResponse.prototype, "consumerConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesProjectsGlobalNetworksGetResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksGetResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksGetResponse };
