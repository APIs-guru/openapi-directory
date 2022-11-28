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
var SpannerProjectsInstancesDatabasesGetDdlPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetDdlPathParams, _super);
    function SpannerProjectsInstancesDatabasesGetDdlPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=database" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlPathParams.prototype, "database", void 0);
    return SpannerProjectsInstancesDatabasesGetDdlPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetDdlPathParams };
var SpannerProjectsInstancesDatabasesGetDdlQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetDdlQueryParams, _super);
    function SpannerProjectsInstancesDatabasesGetDdlQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesGetDdlQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesGetDdlQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetDdlQueryParams };
var SpannerProjectsInstancesDatabasesGetDdlSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetDdlSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesGetDdlSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesGetDdlSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesGetDdlSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesGetDdlSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetDdlSecurityOption1 };
var SpannerProjectsInstancesDatabasesGetDdlSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetDdlSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesGetDdlSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesGetDdlSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesGetDdlSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesGetDdlSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetDdlSecurityOption2 };
var SpannerProjectsInstancesDatabasesGetDdlSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetDdlSecurity, _super);
    function SpannerProjectsInstancesDatabasesGetDdlSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetDdlSecurityOption1)
    ], SpannerProjectsInstancesDatabasesGetDdlSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetDdlSecurityOption2)
    ], SpannerProjectsInstancesDatabasesGetDdlSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesGetDdlSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetDdlSecurity };
var SpannerProjectsInstancesDatabasesGetDdlRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetDdlRequest, _super);
    function SpannerProjectsInstancesDatabasesGetDdlRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetDdlPathParams)
    ], SpannerProjectsInstancesDatabasesGetDdlRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetDdlQueryParams)
    ], SpannerProjectsInstancesDatabasesGetDdlRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesGetDdlSecurity)
    ], SpannerProjectsInstancesDatabasesGetDdlRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesGetDdlRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetDdlRequest };
var SpannerProjectsInstancesDatabasesGetDdlResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesGetDdlResponse, _super);
    function SpannerProjectsInstancesDatabasesGetDdlResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesGetDdlResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetDatabaseDdlResponse)
    ], SpannerProjectsInstancesDatabasesGetDdlResponse.prototype, "getDatabaseDdlResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesGetDdlResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesGetDdlResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesGetDdlResponse };
