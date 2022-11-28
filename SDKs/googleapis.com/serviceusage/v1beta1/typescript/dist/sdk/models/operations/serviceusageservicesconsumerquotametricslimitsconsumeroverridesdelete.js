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
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeletePathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeletePathParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeletePathParams.prototype, "name", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeletePathParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeletePathParams };
export var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum;
(function (ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum) {
    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum["QuotaSafetyCheckUnspecified"] = "QUOTA_SAFETY_CHECK_UNSPECIFIED";
    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum["LimitDecreaseBelowUsage"] = "LIMIT_DECREASE_BELOW_USAGE";
    ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum["LimitDecreasePercentageTooHigh"] = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH";
})(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum || (ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteForceOnlyEnum = {}));
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "force", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceOnly" }),
        __metadata("design:type", Array)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "forceOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1 };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2 };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption1)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurityOption2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity.prototype, "option2", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeletePathParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteQueryParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteSecurity)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest.prototype, "security", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteRequest };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesDeleteResponse };
