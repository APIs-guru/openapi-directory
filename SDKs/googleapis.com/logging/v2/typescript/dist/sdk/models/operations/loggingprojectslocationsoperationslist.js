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
var LoggingProjectsLocationsOperationsListPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsListPathParams, _super);
    function LoggingProjectsLocationsOperationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListPathParams.prototype, "name", void 0);
    return LoggingProjectsLocationsOperationsListPathParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsListPathParams };
var LoggingProjectsLocationsOperationsListQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsListQueryParams, _super);
    function LoggingProjectsLocationsOperationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLocationsOperationsListQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsListQueryParams };
var LoggingProjectsLocationsOperationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsListSecurityOption1, _super);
    function LoggingProjectsLocationsOperationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsOperationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsOperationsListSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsOperationsListSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsListSecurityOption1 };
var LoggingProjectsLocationsOperationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsListSecurityOption2, _super);
    function LoggingProjectsLocationsOperationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsOperationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsOperationsListSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsOperationsListSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsListSecurityOption2 };
var LoggingProjectsLocationsOperationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsListSecurityOption3, _super);
    function LoggingProjectsLocationsOperationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsOperationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsOperationsListSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsOperationsListSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsListSecurityOption3 };
var LoggingProjectsLocationsOperationsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsListSecurityOption4, _super);
    function LoggingProjectsLocationsOperationsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsOperationsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsOperationsListSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsOperationsListSecurityOption4;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsListSecurityOption4 };
var LoggingProjectsLocationsOperationsListSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsListSecurity, _super);
    function LoggingProjectsLocationsOperationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsOperationsListSecurityOption1)
    ], LoggingProjectsLocationsOperationsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsOperationsListSecurityOption2)
    ], LoggingProjectsLocationsOperationsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsOperationsListSecurityOption3)
    ], LoggingProjectsLocationsOperationsListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsOperationsListSecurityOption4)
    ], LoggingProjectsLocationsOperationsListSecurity.prototype, "option4", void 0);
    return LoggingProjectsLocationsOperationsListSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsListSecurity };
var LoggingProjectsLocationsOperationsListRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsListRequest, _super);
    function LoggingProjectsLocationsOperationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsOperationsListPathParams)
    ], LoggingProjectsLocationsOperationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsOperationsListQueryParams)
    ], LoggingProjectsLocationsOperationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsOperationsListSecurity)
    ], LoggingProjectsLocationsOperationsListRequest.prototype, "security", void 0);
    return LoggingProjectsLocationsOperationsListRequest;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsListRequest };
var LoggingProjectsLocationsOperationsListResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsOperationsListResponse, _super);
    function LoggingProjectsLocationsOperationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsOperationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListOperationsResponse)
    ], LoggingProjectsLocationsOperationsListResponse.prototype, "listOperationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsOperationsListResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLocationsOperationsListResponse;
}(SpeakeasyBase));
export { LoggingProjectsLocationsOperationsListResponse };
