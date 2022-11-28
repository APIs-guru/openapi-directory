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
var LoggingProjectsMetricsUpdatePathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsUpdatePathParams, _super);
    function LoggingProjectsMetricsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metricName" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdatePathParams.prototype, "metricName", void 0);
    return LoggingProjectsMetricsUpdatePathParams;
}(SpeakeasyBase));
export { LoggingProjectsMetricsUpdatePathParams };
var LoggingProjectsMetricsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsUpdateQueryParams, _super);
    function LoggingProjectsMetricsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsMetricsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsMetricsUpdateQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsMetricsUpdateQueryParams };
var LoggingProjectsMetricsUpdateSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsUpdateSecurityOption1, _super);
    function LoggingProjectsMetricsUpdateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsUpdateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsUpdateSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsUpdateSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsMetricsUpdateSecurityOption1 };
var LoggingProjectsMetricsUpdateSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsUpdateSecurityOption2, _super);
    function LoggingProjectsMetricsUpdateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsUpdateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsUpdateSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsUpdateSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsMetricsUpdateSecurityOption2 };
var LoggingProjectsMetricsUpdateSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsUpdateSecurityOption3, _super);
    function LoggingProjectsMetricsUpdateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsUpdateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsUpdateSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsUpdateSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsMetricsUpdateSecurityOption3 };
var LoggingProjectsMetricsUpdateSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsUpdateSecurity, _super);
    function LoggingProjectsMetricsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsUpdateSecurityOption1)
    ], LoggingProjectsMetricsUpdateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsUpdateSecurityOption2)
    ], LoggingProjectsMetricsUpdateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsUpdateSecurityOption3)
    ], LoggingProjectsMetricsUpdateSecurity.prototype, "option3", void 0);
    return LoggingProjectsMetricsUpdateSecurity;
}(SpeakeasyBase));
export { LoggingProjectsMetricsUpdateSecurity };
var LoggingProjectsMetricsUpdateRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsUpdateRequest, _super);
    function LoggingProjectsMetricsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsUpdatePathParams)
    ], LoggingProjectsMetricsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsUpdateQueryParams)
    ], LoggingProjectsMetricsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LogMetricInput)
    ], LoggingProjectsMetricsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsUpdateSecurity)
    ], LoggingProjectsMetricsUpdateRequest.prototype, "security", void 0);
    return LoggingProjectsMetricsUpdateRequest;
}(SpeakeasyBase));
export { LoggingProjectsMetricsUpdateRequest };
var LoggingProjectsMetricsUpdateResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsUpdateResponse, _super);
    function LoggingProjectsMetricsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LogMetric)
    ], LoggingProjectsMetricsUpdateResponse.prototype, "logMetric", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsMetricsUpdateResponse.prototype, "statusCode", void 0);
    return LoggingProjectsMetricsUpdateResponse;
}(SpeakeasyBase));
export { LoggingProjectsMetricsUpdateResponse };
