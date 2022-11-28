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
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListPathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListPathParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListPathParams.prototype, "parent", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListPathParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListPathParams };
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams };
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1 };
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2 };
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption1)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurityOption2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity.prototype, "option2", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity };
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListPathParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListQueryParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListSecurity)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest.prototype, "security", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListRequest };
var ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAdminOverridesResponse)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse.prototype, "listAdminOverridesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsAdminOverridesListResponse };
