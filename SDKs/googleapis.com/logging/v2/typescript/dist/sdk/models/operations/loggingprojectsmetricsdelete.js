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
var LoggingProjectsMetricsDeletePathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsDeletePathParams, _super);
    function LoggingProjectsMetricsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=metricName" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeletePathParams.prototype, "metricName", void 0);
    return LoggingProjectsMetricsDeletePathParams;
}(SpeakeasyBase));
export { LoggingProjectsMetricsDeletePathParams };
var LoggingProjectsMetricsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsDeleteQueryParams, _super);
    function LoggingProjectsMetricsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsMetricsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsMetricsDeleteQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsMetricsDeleteQueryParams };
var LoggingProjectsMetricsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsDeleteSecurityOption1, _super);
    function LoggingProjectsMetricsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsDeleteSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsMetricsDeleteSecurityOption1 };
var LoggingProjectsMetricsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsDeleteSecurityOption2, _super);
    function LoggingProjectsMetricsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsDeleteSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsMetricsDeleteSecurityOption2 };
var LoggingProjectsMetricsDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsDeleteSecurityOption3, _super);
    function LoggingProjectsMetricsDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsDeleteSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsMetricsDeleteSecurityOption3 };
var LoggingProjectsMetricsDeleteSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsDeleteSecurity, _super);
    function LoggingProjectsMetricsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsDeleteSecurityOption1)
    ], LoggingProjectsMetricsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsDeleteSecurityOption2)
    ], LoggingProjectsMetricsDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsDeleteSecurityOption3)
    ], LoggingProjectsMetricsDeleteSecurity.prototype, "option3", void 0);
    return LoggingProjectsMetricsDeleteSecurity;
}(SpeakeasyBase));
export { LoggingProjectsMetricsDeleteSecurity };
var LoggingProjectsMetricsDeleteRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsDeleteRequest, _super);
    function LoggingProjectsMetricsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsDeletePathParams)
    ], LoggingProjectsMetricsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsDeleteQueryParams)
    ], LoggingProjectsMetricsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsDeleteSecurity)
    ], LoggingProjectsMetricsDeleteRequest.prototype, "security", void 0);
    return LoggingProjectsMetricsDeleteRequest;
}(SpeakeasyBase));
export { LoggingProjectsMetricsDeleteRequest };
var LoggingProjectsMetricsDeleteResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsDeleteResponse, _super);
    function LoggingProjectsMetricsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], LoggingProjectsMetricsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsMetricsDeleteResponse.prototype, "statusCode", void 0);
    return LoggingProjectsMetricsDeleteResponse;
}(SpeakeasyBase));
export { LoggingProjectsMetricsDeleteResponse };
