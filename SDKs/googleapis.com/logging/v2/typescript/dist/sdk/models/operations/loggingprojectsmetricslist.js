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
var LoggingProjectsMetricsListPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsListPathParams, _super);
    function LoggingProjectsMetricsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListPathParams.prototype, "parent", void 0);
    return LoggingProjectsMetricsListPathParams;
}(SpeakeasyBase));
export { LoggingProjectsMetricsListPathParams };
var LoggingProjectsMetricsListQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsListQueryParams, _super);
    function LoggingProjectsMetricsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LoggingProjectsMetricsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsMetricsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsMetricsListQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsMetricsListQueryParams };
var LoggingProjectsMetricsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsListSecurityOption1, _super);
    function LoggingProjectsMetricsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsListSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsListSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsMetricsListSecurityOption1 };
var LoggingProjectsMetricsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsListSecurityOption2, _super);
    function LoggingProjectsMetricsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsListSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsListSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsMetricsListSecurityOption2 };
var LoggingProjectsMetricsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsListSecurityOption3, _super);
    function LoggingProjectsMetricsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsListSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsListSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsMetricsListSecurityOption3 };
var LoggingProjectsMetricsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsListSecurityOption4, _super);
    function LoggingProjectsMetricsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsMetricsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsMetricsListSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingProjectsMetricsListSecurityOption4;
}(SpeakeasyBase));
export { LoggingProjectsMetricsListSecurityOption4 };
var LoggingProjectsMetricsListSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsListSecurity, _super);
    function LoggingProjectsMetricsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsListSecurityOption1)
    ], LoggingProjectsMetricsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsListSecurityOption2)
    ], LoggingProjectsMetricsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsListSecurityOption3)
    ], LoggingProjectsMetricsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsMetricsListSecurityOption4)
    ], LoggingProjectsMetricsListSecurity.prototype, "option4", void 0);
    return LoggingProjectsMetricsListSecurity;
}(SpeakeasyBase));
export { LoggingProjectsMetricsListSecurity };
var LoggingProjectsMetricsListRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsListRequest, _super);
    function LoggingProjectsMetricsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsListPathParams)
    ], LoggingProjectsMetricsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsListQueryParams)
    ], LoggingProjectsMetricsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsMetricsListSecurity)
    ], LoggingProjectsMetricsListRequest.prototype, "security", void 0);
    return LoggingProjectsMetricsListRequest;
}(SpeakeasyBase));
export { LoggingProjectsMetricsListRequest };
var LoggingProjectsMetricsListResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsMetricsListResponse, _super);
    function LoggingProjectsMetricsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsMetricsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLogMetricsResponse)
    ], LoggingProjectsMetricsListResponse.prototype, "listLogMetricsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsMetricsListResponse.prototype, "statusCode", void 0);
    return LoggingProjectsMetricsListResponse;
}(SpeakeasyBase));
export { LoggingProjectsMetricsListResponse };
