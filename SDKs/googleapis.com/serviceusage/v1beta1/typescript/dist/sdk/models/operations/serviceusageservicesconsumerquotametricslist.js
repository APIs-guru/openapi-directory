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
var ServiceusageServicesConsumerQuotaMetricsListPathParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsListPathParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListPathParams.prototype, "parent", void 0);
    return ServiceusageServicesConsumerQuotaMetricsListPathParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsListPathParams };
export var ServiceusageServicesConsumerQuotaMetricsListViewEnum;
(function (ServiceusageServicesConsumerQuotaMetricsListViewEnum) {
    ServiceusageServicesConsumerQuotaMetricsListViewEnum["QuotaViewUnspecified"] = "QUOTA_VIEW_UNSPECIFIED";
    ServiceusageServicesConsumerQuotaMetricsListViewEnum["Basic"] = "BASIC";
    ServiceusageServicesConsumerQuotaMetricsListViewEnum["Full"] = "FULL";
})(ServiceusageServicesConsumerQuotaMetricsListViewEnum || (ServiceusageServicesConsumerQuotaMetricsListViewEnum = {}));
var ServiceusageServicesConsumerQuotaMetricsListQueryParams = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsListQueryParams, _super);
    function ServiceusageServicesConsumerQuotaMetricsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListQueryParams.prototype, "view", void 0);
    return ServiceusageServicesConsumerQuotaMetricsListQueryParams;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsListQueryParams };
var ServiceusageServicesConsumerQuotaMetricsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsListSecurityOption1, _super);
    function ServiceusageServicesConsumerQuotaMetricsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsListSecurityOption1.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsListSecurityOption1;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsListSecurityOption1 };
var ServiceusageServicesConsumerQuotaMetricsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsListSecurityOption2, _super);
    function ServiceusageServicesConsumerQuotaMetricsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServiceusageServicesConsumerQuotaMetricsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServiceusageServicesConsumerQuotaMetricsListSecurityOption2.prototype, "oauth2c", void 0);
    return ServiceusageServicesConsumerQuotaMetricsListSecurityOption2;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsListSecurityOption2 };
var ServiceusageServicesConsumerQuotaMetricsListSecurity = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsListSecurity, _super);
    function ServiceusageServicesConsumerQuotaMetricsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsListSecurityOption1)
    ], ServiceusageServicesConsumerQuotaMetricsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsListSecurityOption2)
    ], ServiceusageServicesConsumerQuotaMetricsListSecurity.prototype, "option2", void 0);
    return ServiceusageServicesConsumerQuotaMetricsListSecurity;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsListSecurity };
var ServiceusageServicesConsumerQuotaMetricsListRequest = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsListRequest, _super);
    function ServiceusageServicesConsumerQuotaMetricsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsListPathParams)
    ], ServiceusageServicesConsumerQuotaMetricsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsListQueryParams)
    ], ServiceusageServicesConsumerQuotaMetricsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServiceusageServicesConsumerQuotaMetricsListSecurity)
    ], ServiceusageServicesConsumerQuotaMetricsListRequest.prototype, "security", void 0);
    return ServiceusageServicesConsumerQuotaMetricsListRequest;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsListRequest };
var ServiceusageServicesConsumerQuotaMetricsListResponse = /** @class */ (function (_super) {
    __extends(ServiceusageServicesConsumerQuotaMetricsListResponse, _super);
    function ServiceusageServicesConsumerQuotaMetricsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServiceusageServicesConsumerQuotaMetricsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListConsumerQuotaMetricsResponse)
    ], ServiceusageServicesConsumerQuotaMetricsListResponse.prototype, "listConsumerQuotaMetricsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServiceusageServicesConsumerQuotaMetricsListResponse.prototype, "statusCode", void 0);
    return ServiceusageServicesConsumerQuotaMetricsListResponse;
}(SpeakeasyBase));
export { ServiceusageServicesConsumerQuotaMetricsListResponse };
