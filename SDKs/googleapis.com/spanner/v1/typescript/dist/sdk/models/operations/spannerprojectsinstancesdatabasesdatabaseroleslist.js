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
var SpannerProjectsInstancesDatabasesDatabaseRolesListPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesListPathParams, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListPathParams.prototype, "parent", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesListPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesListPathParams };
var SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams };
var SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption1 };
var SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption2 };
var SpannerProjectsInstancesDatabasesDatabaseRolesListSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesListSecurity, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption1)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDatabaseRolesListSecurityOption2)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesListSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesListSecurity };
var SpannerProjectsInstancesDatabasesDatabaseRolesListRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesListRequest, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDatabaseRolesListPathParams)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDatabaseRolesListQueryParams)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDatabaseRolesListSecurity)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesListRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesListRequest };
var SpannerProjectsInstancesDatabasesDatabaseRolesListResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesListResponse, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDatabaseRolesResponse)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListResponse.prototype, "listDatabaseRolesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesListResponse.prototype, "statusCode", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesListResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesListResponse };
