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
var SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsPathParams, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsPathParams };
var SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams };
var SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption1, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption1 };
var SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption2, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption2 };
var SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurity, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption1)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurityOption2)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurity.prototype, "option2", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurity };
var SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsRequest, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsPathParams)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsQueryParams)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsSecurity)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsRequest.prototype, "security", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsRequest;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsRequest };
var SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsResponse, _super);
    function SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsResponse;
}(SpeakeasyBase));
export { SpannerProjectsInstancesDatabasesDatabaseRolesTestIamPermissionsResponse };
