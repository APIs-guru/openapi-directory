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
var LoggingProjectsLogsListPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsListPathParams, _super);
    function LoggingProjectsLogsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListPathParams.prototype, "parent", void 0);
    return LoggingProjectsLogsListPathParams;
}(SpeakeasyBase));
export { LoggingProjectsLogsListPathParams };
var LoggingProjectsLogsListQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsListQueryParams, _super);
    function LoggingProjectsLogsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LoggingProjectsLogsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLogsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceNames" }),
        __metadata("design:type", Array)
    ], LoggingProjectsLogsListQueryParams.prototype, "resourceNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLogsListQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLogsListQueryParams };
var LoggingProjectsLogsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsListSecurityOption1, _super);
    function LoggingProjectsLogsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLogsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLogsListSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLogsListSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLogsListSecurityOption1 };
var LoggingProjectsLogsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsListSecurityOption2, _super);
    function LoggingProjectsLogsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLogsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLogsListSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLogsListSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLogsListSecurityOption2 };
var LoggingProjectsLogsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsListSecurityOption3, _super);
    function LoggingProjectsLogsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLogsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLogsListSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsLogsListSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsLogsListSecurityOption3 };
var LoggingProjectsLogsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsListSecurityOption4, _super);
    function LoggingProjectsLogsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLogsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLogsListSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingProjectsLogsListSecurityOption4;
}(SpeakeasyBase));
export { LoggingProjectsLogsListSecurityOption4 };
var LoggingProjectsLogsListSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsListSecurity, _super);
    function LoggingProjectsLogsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLogsListSecurityOption1)
    ], LoggingProjectsLogsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLogsListSecurityOption2)
    ], LoggingProjectsLogsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLogsListSecurityOption3)
    ], LoggingProjectsLogsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLogsListSecurityOption4)
    ], LoggingProjectsLogsListSecurity.prototype, "option4", void 0);
    return LoggingProjectsLogsListSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLogsListSecurity };
var LoggingProjectsLogsListRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsListRequest, _super);
    function LoggingProjectsLogsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLogsListPathParams)
    ], LoggingProjectsLogsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLogsListQueryParams)
    ], LoggingProjectsLogsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LoggingProjectsLogsListSecurity)
    ], LoggingProjectsLogsListRequest.prototype, "security", void 0);
    return LoggingProjectsLogsListRequest;
}(SpeakeasyBase));
export { LoggingProjectsLogsListRequest };
var LoggingProjectsLogsListResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLogsListResponse, _super);
    function LoggingProjectsLogsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLogsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListLogsResponse)
    ], LoggingProjectsLogsListResponse.prototype, "listLogsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLogsListResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLogsListResponse;
}(SpeakeasyBase));
export { LoggingProjectsLogsListResponse };
