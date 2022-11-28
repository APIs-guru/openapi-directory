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
var ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesPathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesPathParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesPathParams.prototype, "parent", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesPathParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesPathParams };
var ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams };
var ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1 };
var ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2 };
var ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption1)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurityOption2)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity.prototype, "option2", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity };
var ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesPathParams)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesQueryParams)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ImportConsumerOverridesRequest)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesSecurity)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest.prototype, "security", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesRequest };
var ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse, _super);
    function ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsImportConsumerOverridesResponse };
