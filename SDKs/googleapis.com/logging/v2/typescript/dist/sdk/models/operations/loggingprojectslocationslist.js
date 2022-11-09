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
var LoggingProjectsLocationsListPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsListPathParams, _super);
    function LoggingProjectsLocationsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListPathParams.prototype, "name", void 0);
    return LoggingProjectsLocationsListPathParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsListPathParams };
var LoggingProjectsLocationsListQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsListQueryParams, _super);
    function LoggingProjectsLocationsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLocationsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLocationsListQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsListQueryParams };
var LoggingProjectsLocationsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsListSecurityOption1, _super);
    function LoggingProjectsLocationsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsListSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsListSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLocationsListSecurityOption1 };
var LoggingProjectsLocationsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsListSecurityOption2, _super);
    function LoggingProjectsLocationsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsListSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsListSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLocationsListSecurityOption2 };
var LoggingProjectsLocationsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsListSecurityOption3, _super);
    function LoggingProjectsLocationsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsListSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsListSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsLocationsListSecurityOption3 };
var LoggingProjectsLocationsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsListSecurityOption4, _super);
    function LoggingProjectsLocationsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsListSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsListSecurityOption4;
}(SpeakeasyBase));
export { LoggingProjectsLocationsListSecurityOption4 };
var LoggingProjectsLocationsListSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsListSecurity, _super);
    function LoggingProjectsLocationsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsListSecurityOption1)
    ], LoggingProjectsLocationsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsListSecurityOption2)
    ], LoggingProjectsLocationsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsListSecurityOption3)
    ], LoggingProjectsLocationsListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsListSecurityOption4)
    ], LoggingProjectsLocationsListSecurity.prototype, "option4", void 0);
    return LoggingProjectsLocationsListSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLocationsListSecurity };
var LoggingProjectsLocationsListRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsListRequest, _super);
    function LoggingProjectsLocationsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsListPathParams)
    ], LoggingProjectsLocationsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsListQueryParams)
    ], LoggingProjectsLocationsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsListSecurity)
    ], LoggingProjectsLocationsListRequest.prototype, "security", void 0);
    return LoggingProjectsLocationsListRequest;
}(SpeakeasyBase));
export { LoggingProjectsLocationsListRequest };
var LoggingProjectsLocationsListResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsListResponse, _super);
    function LoggingProjectsLocationsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListLocationsResponse)
    ], LoggingProjectsLocationsListResponse.prototype, "listLocationsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsListResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLocationsListResponse;
}(SpeakeasyBase));
export { LoggingProjectsLocationsListResponse };
