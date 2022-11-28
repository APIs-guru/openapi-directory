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
var SpannerProjectsInstancesDatabasesDropDatabasePathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDropDatabasePathParams, _super);
    function SpannerProjectsInstancesDatabasesDropDatabasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabasePathParams.prototype, "database", void 0);
    return SpannerProjectsInstancesDatabasesDropDatabasePathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDropDatabasePathParams };
var SpannerProjectsInstancesDatabasesDropDatabaseQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDropDatabaseQueryParams, _super);
    function SpannerProjectsInstancesDatabasesDropDatabaseQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabaseQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabaseQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabaseQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabaseQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabaseQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabaseQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabaseQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesDropDatabaseQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabaseQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabaseQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabaseQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesDropDatabaseQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDropDatabaseQueryParams };
var SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1 };
var SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2 };
var SpannerProjectsInstancesDatabasesDropDatabaseSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDropDatabaseSecurity, _super);
    function SpannerProjectsInstancesDatabasesDropDatabaseSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption1)
    ], SpannerProjectsInstancesDatabasesDropDatabaseSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDropDatabaseSecurityOption2)
    ], SpannerProjectsInstancesDatabasesDropDatabaseSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesDropDatabaseSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDropDatabaseSecurity };
var SpannerProjectsInstancesDatabasesDropDatabaseRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDropDatabaseRequest, _super);
    function SpannerProjectsInstancesDatabasesDropDatabaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDropDatabasePathParams)
    ], SpannerProjectsInstancesDatabasesDropDatabaseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDropDatabaseQueryParams)
    ], SpannerProjectsInstancesDatabasesDropDatabaseRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDropDatabaseSecurity)
    ], SpannerProjectsInstancesDatabasesDropDatabaseRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesDropDatabaseRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDropDatabaseRequest };
var SpannerProjectsInstancesDatabasesDropDatabaseResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDropDatabaseResponse, _super);
    function SpannerProjectsInstancesDatabasesDropDatabaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDropDatabaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SpannerProjectsInstancesDatabasesDropDatabaseResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesDropDatabaseResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesDropDatabaseResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDropDatabaseResponse };
