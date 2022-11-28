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
var SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlPathParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlPathParams.prototype, "session", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlPathParams };
var SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams };
var SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1 };
var SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2 };
var SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption1)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurityOption2)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity };
var SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlRequest, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlPathParams)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlQueryParams)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExecuteSqlRequest)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlSecurity)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlRequest };
var SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlResponse, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PartialResultSet)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlResponse.prototype, "partialResultSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteStreamingSqlResponse };
