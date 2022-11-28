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
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams.prototype, "parent", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams };
export var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum;
(function (ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum) {
    ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum["QuotaSafetyCheckUnspecified"] = "QUOTA_SAFETY_CHECK_UNSPECIFIED";
    ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum["LimitDecreaseBelowUsage"] = "LIMIT_DECREASE_BELOW_USAGE";
    ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum["LimitDecreasePercentageTooHigh"] = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH";
})(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum || (ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateForceOnlyEnum = {}));
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceOnly" }),
        __metadata("design:type", Array)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "forceOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams };
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1 };
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2 };
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption1)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurityOption2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity.prototype, "option2", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity };
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreatePathParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateQueryParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QuotaOverride)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateSecurity)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest.prototype, "security", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateRequest };
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesCreateResponse };
