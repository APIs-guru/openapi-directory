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
var ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigPathParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigPathParams, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigPathParams.prototype, "parent", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigPathParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigPathParams };
var ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams.prototype, "uploadProtocol", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams };
var ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1 };
var ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2.prototype, "oauth2c", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2 };
var ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption1)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurityOption2)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity.prototype, "option2", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity };
var ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigPathParams)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigQueryParams)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.UpdateConsumerConfigRequestInput)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigSecurity)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest.prototype, "security", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigRequest };
var ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse = /** @class */ (function (_super) {
    __extends(ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse, _super);
    function ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse.prototype, "statusCode", void 0);
    return ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse;
}(SpeakeasyBase));
export { ServicenetworkingServicesProjectsGlobalNetworksUpdateConsumerConfigResponse };
