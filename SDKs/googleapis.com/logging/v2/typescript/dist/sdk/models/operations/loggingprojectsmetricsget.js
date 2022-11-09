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
var LoggingProjectsMetricsGetPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsGetPathParams, _super);
    function LoggingProjectsMetricsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=metricName" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetPathParams.prototype, "metricName", void 0);
    return LoggingProjectsMetricsGetPathParams;
}(SpeakeasyBase));
export { LoggingProjectsMetricsGetPathParams };
var LoggingProjectsMetricsGetQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsGetQueryParams, _super);
    function LoggingProjectsMetricsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsMetricsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsMetricsGetQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsMetricsGetQueryParams };
var LoggingProjectsMetricsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsGetSecurityOption1, _super);
    function LoggingProjectsMetricsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsGetSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsGetSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsMetricsGetSecurityOption1 };
var LoggingProjectsMetricsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsGetSecurityOption2, _super);
    function LoggingProjectsMetricsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsGetSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsGetSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsMetricsGetSecurityOption2 };
var LoggingProjectsMetricsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsGetSecurityOption3, _super);
    function LoggingProjectsMetricsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsGetSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsGetSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsMetricsGetSecurityOption3 };
var LoggingProjectsMetricsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsGetSecurityOption4, _super);
    function LoggingProjectsMetricsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsGetSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsGetSecurityOption4;
}(SpeakeasyBase));
export { LoggingProjectsMetricsGetSecurityOption4 };
var LoggingProjectsMetricsGetSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsGetSecurity, _super);
    function LoggingProjectsMetricsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsGetSecurityOption1)
    ], LoggingProjectsMetricsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsGetSecurityOption2)
    ], LoggingProjectsMetricsGetSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsGetSecurityOption3)
    ], LoggingProjectsMetricsGetSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsGetSecurityOption4)
    ], LoggingProjectsMetricsGetSecurity.prototype, "option4", void 0);
    return LoggingProjectsMetricsGetSecurity;
}(SpeakeasyBase));
export { LoggingProjectsMetricsGetSecurity };
var LoggingProjectsMetricsGetRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsGetRequest, _super);
    function LoggingProjectsMetricsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsMetricsGetPathParams)
    ], LoggingProjectsMetricsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsMetricsGetQueryParams)
    ], LoggingProjectsMetricsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsMetricsGetSecurity)
    ], LoggingProjectsMetricsGetRequest.prototype, "security", void 0);
    return LoggingProjectsMetricsGetRequest;
}(SpeakeasyBase));
export { LoggingProjectsMetricsGetRequest };
var LoggingProjectsMetricsGetResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsGetResponse, _super);
    function LoggingProjectsMetricsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LogMetric)
    ], LoggingProjectsMetricsGetResponse.prototype, "logMetric", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsMetricsGetResponse.prototype, "statusCode", void 0);
    return LoggingProjectsMetricsGetResponse;
}(SpeakeasyBase));
export { LoggingProjectsMetricsGetResponse };
