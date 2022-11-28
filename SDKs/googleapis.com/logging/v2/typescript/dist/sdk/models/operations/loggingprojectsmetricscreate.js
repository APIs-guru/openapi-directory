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
var LoggingProjectsMetricsCreatePathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsCreatePathParams, _super);
    function LoggingProjectsMetricsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreatePathParams.prototype, "parent", void 0);
    return LoggingProjectsMetricsCreatePathParams;
}(SpeakeasyBase));
export { LoggingProjectsMetricsCreatePathParams };
var LoggingProjectsMetricsCreateQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsCreateQueryParams, _super);
    function LoggingProjectsMetricsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsMetricsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsMetricsCreateQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsMetricsCreateQueryParams };
var LoggingProjectsMetricsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsCreateSecurityOption1, _super);
    function LoggingProjectsMetricsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsCreateSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsMetricsCreateSecurityOption1 };
var LoggingProjectsMetricsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsCreateSecurityOption2, _super);
    function LoggingProjectsMetricsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsCreateSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsMetricsCreateSecurityOption2 };
var LoggingProjectsMetricsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsCreateSecurityOption3, _super);
    function LoggingProjectsMetricsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsCreateSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsMetricsCreateSecurityOption3 };
var LoggingProjectsMetricsCreateSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsCreateSecurity, _super);
    function LoggingProjectsMetricsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsCreateSecurityOption1)
    ], LoggingProjectsMetricsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsCreateSecurityOption2)
    ], LoggingProjectsMetricsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsCreateSecurityOption3)
    ], LoggingProjectsMetricsCreateSecurity.prototype, "option3", void 0);
    return LoggingProjectsMetricsCreateSecurity;
}(SpeakeasyBase));
export { LoggingProjectsMetricsCreateSecurity };
var LoggingProjectsMetricsCreateRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsCreateRequest, _super);
    function LoggingProjectsMetricsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsCreatePathParams)
    ], LoggingProjectsMetricsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsCreateQueryParams)
    ], LoggingProjectsMetricsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LogMetricInput)
    ], LoggingProjectsMetricsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsCreateSecurity)
    ], LoggingProjectsMetricsCreateRequest.prototype, "security", void 0);
    return LoggingProjectsMetricsCreateRequest;
}(SpeakeasyBase));
export { LoggingProjectsMetricsCreateRequest };
var LoggingProjectsMetricsCreateResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsCreateResponse, _super);
    function LoggingProjectsMetricsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LogMetric)
    ], LoggingProjectsMetricsCreateResponse.prototype, "logMetric", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsMetricsCreateResponse.prototype, "statusCode", void 0);
    return LoggingProjectsMetricsCreateResponse;
}(SpeakeasyBase));
export { LoggingProjectsMetricsCreateResponse };
