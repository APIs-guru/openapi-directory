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
var ServicemanagementServicesGenerateConfigReportQueryParams = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGenerateConfigReportQueryParams, _super);
    function ServicemanagementServicesGenerateConfigReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGenerateConfigReportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGenerateConfigReportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGenerateConfigReportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGenerateConfigReportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGenerateConfigReportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGenerateConfigReportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGenerateConfigReportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicemanagementServicesGenerateConfigReportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGenerateConfigReportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGenerateConfigReportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicemanagementServicesGenerateConfigReportQueryParams.prototype, "uploadProtocol", void 0);
    return ServicemanagementServicesGenerateConfigReportQueryParams;
}(SpeakeasyBase));
export { ServicemanagementServicesGenerateConfigReportQueryParams };
var ServicemanagementServicesGenerateConfigReportSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGenerateConfigReportSecurityOption1, _super);
    function ServicemanagementServicesGenerateConfigReportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesGenerateConfigReportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesGenerateConfigReportSecurityOption1.prototype, "oauth2c", void 0);
    return ServicemanagementServicesGenerateConfigReportSecurityOption1;
}(SpeakeasyBase));
export { ServicemanagementServicesGenerateConfigReportSecurityOption1 };
var ServicemanagementServicesGenerateConfigReportSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGenerateConfigReportSecurityOption2, _super);
    function ServicemanagementServicesGenerateConfigReportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicemanagementServicesGenerateConfigReportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicemanagementServicesGenerateConfigReportSecurityOption2.prototype, "oauth2c", void 0);
    return ServicemanagementServicesGenerateConfigReportSecurityOption2;
}(SpeakeasyBase));
export { ServicemanagementServicesGenerateConfigReportSecurityOption2 };
var ServicemanagementServicesGenerateConfigReportSecurity = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGenerateConfigReportSecurity, _super);
    function ServicemanagementServicesGenerateConfigReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesGenerateConfigReportSecurityOption1)
    ], ServicemanagementServicesGenerateConfigReportSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ServicemanagementServicesGenerateConfigReportSecurityOption2)
    ], ServicemanagementServicesGenerateConfigReportSecurity.prototype, "option2", void 0);
    return ServicemanagementServicesGenerateConfigReportSecurity;
}(SpeakeasyBase));
export { ServicemanagementServicesGenerateConfigReportSecurity };
var ServicemanagementServicesGenerateConfigReportRequest = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGenerateConfigReportRequest, _super);
    function ServicemanagementServicesGenerateConfigReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesGenerateConfigReportQueryParams)
    ], ServicemanagementServicesGenerateConfigReportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GenerateConfigReportRequest)
    ], ServicemanagementServicesGenerateConfigReportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicemanagementServicesGenerateConfigReportSecurity)
    ], ServicemanagementServicesGenerateConfigReportRequest.prototype, "security", void 0);
    return ServicemanagementServicesGenerateConfigReportRequest;
}(SpeakeasyBase));
export { ServicemanagementServicesGenerateConfigReportRequest };
var ServicemanagementServicesGenerateConfigReportResponse = /** @class */ (function (_super) {
    __extends(ServicemanagementServicesGenerateConfigReportResponse, _super);
    function ServicemanagementServicesGenerateConfigReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicemanagementServicesGenerateConfigReportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenerateConfigReportResponse)
    ], ServicemanagementServicesGenerateConfigReportResponse.prototype, "generateConfigReportResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicemanagementServicesGenerateConfigReportResponse.prototype, "statusCode", void 0);
    return ServicemanagementServicesGenerateConfigReportResponse;
}(SpeakeasyBase));
export { ServicemanagementServicesGenerateConfigReportResponse };
