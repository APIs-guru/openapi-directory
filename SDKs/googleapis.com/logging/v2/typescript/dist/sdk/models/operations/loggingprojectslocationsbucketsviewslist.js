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
var LoggingProjectsLocationsBucketsViewsListPathParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsListPathParams, _super);
    function LoggingProjectsLocationsBucketsViewsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListPathParams.prototype, "parent", void 0);
    return LoggingProjectsLocationsBucketsViewsListPathParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsListPathParams };
var LoggingProjectsLocationsBucketsViewsListQueryParams = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsListQueryParams, _super);
    function LoggingProjectsLocationsBucketsViewsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListQueryParams.prototype, "uploadProtocol", void 0);
    return LoggingProjectsLocationsBucketsViewsListQueryParams;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsListQueryParams };
var LoggingProjectsLocationsBucketsViewsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsListSecurityOption1, _super);
    function LoggingProjectsLocationsBucketsViewsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsViewsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsViewsListSecurityOption1.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsViewsListSecurityOption1;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsListSecurityOption1 };
var LoggingProjectsLocationsBucketsViewsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsListSecurityOption2, _super);
    function LoggingProjectsLocationsBucketsViewsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsViewsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsViewsListSecurityOption2.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsViewsListSecurityOption2;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsListSecurityOption2 };
var LoggingProjectsLocationsBucketsViewsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsListSecurityOption3, _super);
    function LoggingProjectsLocationsBucketsViewsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsViewsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsViewsListSecurityOption3.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsViewsListSecurityOption3;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsListSecurityOption3 };
var LoggingProjectsLocationsBucketsViewsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsListSecurityOption4, _super);
    function LoggingProjectsLocationsBucketsViewsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LoggingProjectsLocationsBucketsViewsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LoggingProjectsLocationsBucketsViewsListSecurityOption4.prototype, "oauth2c", void 0);
    return LoggingProjectsLocationsBucketsViewsListSecurityOption4;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsListSecurityOption4 };
var LoggingProjectsLocationsBucketsViewsListSecurity = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsListSecurity, _super);
    function LoggingProjectsLocationsBucketsViewsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsListSecurityOption1)
    ], LoggingProjectsLocationsBucketsViewsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsListSecurityOption2)
    ], LoggingProjectsLocationsBucketsViewsListSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsListSecurityOption3)
    ], LoggingProjectsLocationsBucketsViewsListSecurity.prototype, "option3", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsListSecurityOption4)
    ], LoggingProjectsLocationsBucketsViewsListSecurity.prototype, "option4", void 0);
    return LoggingProjectsLocationsBucketsViewsListSecurity;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsListSecurity };
var LoggingProjectsLocationsBucketsViewsListRequest = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsListRequest, _super);
    function LoggingProjectsLocationsBucketsViewsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsListPathParams)
    ], LoggingProjectsLocationsBucketsViewsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsListQueryParams)
    ], LoggingProjectsLocationsBucketsViewsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", LoggingProjectsLocationsBucketsViewsListSecurity)
    ], LoggingProjectsLocationsBucketsViewsListRequest.prototype, "security", void 0);
    return LoggingProjectsLocationsBucketsViewsListRequest;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsListRequest };
var LoggingProjectsLocationsBucketsViewsListResponse = /** @class */ (function (_super) {
    __extends(LoggingProjectsLocationsBucketsViewsListResponse, _super);
    function LoggingProjectsLocationsBucketsViewsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], LoggingProjectsLocationsBucketsViewsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListViewsResponse)
    ], LoggingProjectsLocationsBucketsViewsListResponse.prototype, "listViewsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], LoggingProjectsLocationsBucketsViewsListResponse.prototype, "statusCode", void 0);
    return LoggingProjectsLocationsBucketsViewsListResponse;
}(SpeakeasyBase));
export { LoggingProjectsLocationsBucketsViewsListResponse };
