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
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListPathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListPathParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListPathParams.prototype, "parent", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListPathParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListPathParams };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams.prototype, "uploadProtocol", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1 };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2 };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption1)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurityOption2)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity.prototype, "option2", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListPathParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListQueryParams)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListSecurity)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest.prototype, "security", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListRequest };
var ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse, _super);
    function ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListConsumerOverridesResponse)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse.prototype, "listConsumerOverridesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsLimitsConsumerOverridesListResponse };
