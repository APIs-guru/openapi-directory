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
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams.prototype, "name", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams };
export var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum;
(function (ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum) {
    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum["QuotaSafetyCheckUnspecified"] = "QUOTA_SAFETY_CHECK_UNSPECIFIED";
    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum["LimitDecreaseBelowUsage"] = "LIMIT_DECREASE_BELOW_USAGE";
    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum["LimitDecreasePercentageTooHigh"] = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH";
})(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum || (ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchForceOnlyEnum = {}));
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceOnly" }),
        __metadata("design:type", Array)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "forceOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1 };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2 };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption1)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurityOption2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity.prototype, "option2", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchPathParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchQueryParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QuotaOverride)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchSecurity)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest.prototype, "security", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchRequest };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesPatchResponse };
