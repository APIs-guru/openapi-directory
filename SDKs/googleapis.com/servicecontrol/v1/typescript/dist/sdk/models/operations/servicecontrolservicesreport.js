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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ServicecontrolServicesReportPathParams = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesReportPathParams, _super);
    function ServicecontrolServicesReportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=serviceName" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportPathParams.prototype, "serviceName", void 0);
    return ServicecontrolServicesReportPathParams;
}(SpeakeasyBase));
export { ServicecontrolServicesReportPathParams };
var ServicecontrolServicesReportQueryParams = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesReportQueryParams, _super);
    function ServicecontrolServicesReportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicecontrolServicesReportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportQueryParams.prototype, "uploadProtocol", void 0);
    return ServicecontrolServicesReportQueryParams;
}(SpeakeasyBase));
export { ServicecontrolServicesReportQueryParams };
var ServicecontrolServicesReportSecurityOption1 = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesReportSecurityOption1, _super);
    function ServicecontrolServicesReportSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicecontrolServicesReportSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicecontrolServicesReportSecurityOption1.prototype, "oauth2c", void 0);
    return ServicecontrolServicesReportSecurityOption1;
}(SpeakeasyBase));
export { ServicecontrolServicesReportSecurityOption1 };
var ServicecontrolServicesReportSecurityOption2 = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesReportSecurityOption2, _super);
    function ServicecontrolServicesReportSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicecontrolServicesReportSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicecontrolServicesReportSecurityOption2.prototype, "oauth2c", void 0);
    return ServicecontrolServicesReportSecurityOption2;
}(SpeakeasyBase));
export { ServicecontrolServicesReportSecurityOption2 };
var ServicecontrolServicesReportSecurity = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesReportSecurity, _super);
    function ServicecontrolServicesReportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ServicecontrolServicesReportSecurityOption1)
    ], ServicecontrolServicesReportSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ServicecontrolServicesReportSecurityOption2)
    ], ServicecontrolServicesReportSecurity.prototype, "option2", void 0);
    return ServicecontrolServicesReportSecurity;
}(SpeakeasyBase));
export { ServicecontrolServicesReportSecurity };
var ServicecontrolServicesReportRequest = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesReportRequest, _super);
    function ServicecontrolServicesReportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ServicecontrolServicesReportPathParams)
    ], ServicecontrolServicesReportRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicecontrolServicesReportQueryParams)
    ], ServicecontrolServicesReportRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReportRequest)
    ], ServicecontrolServicesReportRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ServicecontrolServicesReportSecurity)
    ], ServicecontrolServicesReportRequest.prototype, "security", void 0);
    return ServicecontrolServicesReportRequest;
}(SpeakeasyBase));
export { ServicecontrolServicesReportRequest };
var ServicecontrolServicesReportResponse = /** @class */ (function (_super) {
    __extends(ServicecontrolServicesReportResponse, _super);
    function ServicecontrolServicesReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ServicecontrolServicesReportResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ReportResponse)
    ], ServicecontrolServicesReportResponse.prototype, "reportResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ServicecontrolServicesReportResponse.prototype, "statusCode", void 0);
    return ServicecontrolServicesReportResponse;
}(SpeakeasyBase));
export { ServicecontrolServicesReportResponse };
