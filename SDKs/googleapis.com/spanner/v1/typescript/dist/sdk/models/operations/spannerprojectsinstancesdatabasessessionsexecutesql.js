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
var SpannerProjectsInstancesDatabasesSessionsExecuteSqlPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteSqlPathParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteSqlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=session" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlPathParams.prototype, "session", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteSqlPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteSqlPathParams };
var SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams };
var SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption1 };
var SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption2 };
var SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurity, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption1)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurityOption2)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurity };
var SpannerProjectsInstancesDatabasesSessionsExecuteSqlRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteSqlRequest, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteSqlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteSqlPathParams)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteSqlQueryParams)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ExecuteSqlRequest)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesSessionsExecuteSqlSecurity)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteSqlRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteSqlRequest };
var SpannerProjectsInstancesDatabasesSessionsExecuteSqlResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesSessionsExecuteSqlResponse, _super);
    function SpannerProjectsInstancesDatabasesSessionsExecuteSqlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResultSet)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlResponse.prototype, "resultSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesSessionsExecuteSqlResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesSessionsExecuteSqlResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesSessionsExecuteSqlResponse };
