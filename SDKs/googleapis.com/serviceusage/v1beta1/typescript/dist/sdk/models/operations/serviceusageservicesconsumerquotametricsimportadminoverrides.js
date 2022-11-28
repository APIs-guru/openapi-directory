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
var ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesPathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesPathParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesPathParams.prototype, "parent", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesPathParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesPathParams };
var ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams };
var ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1 };
var ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2 };
var ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption1)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurityOption2)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity.prototype, "option2", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity };
var ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesPathParams)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesQueryParams)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImportAdminOverridesRequest)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesSecurity)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest.prototype, "security", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesRequest };
var ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportAdminOverridesResponse };
