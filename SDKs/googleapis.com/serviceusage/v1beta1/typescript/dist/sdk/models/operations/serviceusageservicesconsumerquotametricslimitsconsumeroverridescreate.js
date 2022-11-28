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
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams.prototype, "parent", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams };
export var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum;
(function (ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum) {
    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum["QuotaSafetyCheckUnspecified"] = "QUOTA_SAFETY_CHECK_UNSPECIFIED";
    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum["LimitDecreaseBelowUsage"] = "LIMIT_DECREASE_BELOW_USAGE";
    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum["LimitDecreasePercentageTooHigh"] = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH";
})(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum || (ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateForceOnlyEnum = {}));
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceOnly" }),
        __metadata("design:type", Array)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "forceOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1 };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2 };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption1)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurityOption2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity.prototype, "option2", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreatePathParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateQueryParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QuotaOverride)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateSecurity)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest.prototype, "security", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateRequest };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesCreateResponse };
