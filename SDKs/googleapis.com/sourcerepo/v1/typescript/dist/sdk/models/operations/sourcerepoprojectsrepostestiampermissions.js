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
var SourcerepoProjectsReposTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposTestIamPermissionsPathParams, _super);
    function SourcerepoProjectsReposTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsPathParams.prototype, "resource", void 0);
    return SourcerepoProjectsReposTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposTestIamPermissionsPathParams };
var SourcerepoProjectsReposTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposTestIamPermissionsQueryParams, _super);
    function SourcerepoProjectsReposTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SourcerepoProjectsReposTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return SourcerepoProjectsReposTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { SourcerepoProjectsReposTestIamPermissionsQueryParams };
var SourcerepoProjectsReposTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposTestIamPermissionsSecurityOption1, _super);
    function SourcerepoProjectsReposTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { SourcerepoProjectsReposTestIamPermissionsSecurityOption1 };
var SourcerepoProjectsReposTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposTestIamPermissionsSecurityOption2, _super);
    function SourcerepoProjectsReposTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { SourcerepoProjectsReposTestIamPermissionsSecurityOption2 };
var SourcerepoProjectsReposTestIamPermissionsSecurityOption3 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposTestIamPermissionsSecurityOption3, _super);
    function SourcerepoProjectsReposTestIamPermissionsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposTestIamPermissionsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposTestIamPermissionsSecurityOption3.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposTestIamPermissionsSecurityOption3;
}(SpeakeasyBase));
export { SourcerepoProjectsReposTestIamPermissionsSecurityOption3 };
var SourcerepoProjectsReposTestIamPermissionsSecurityOption4 = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposTestIamPermissionsSecurityOption4, _super);
    function SourcerepoProjectsReposTestIamPermissionsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SourcerepoProjectsReposTestIamPermissionsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SourcerepoProjectsReposTestIamPermissionsSecurityOption4.prototype, "oauth2c", void 0);
    return SourcerepoProjectsReposTestIamPermissionsSecurityOption4;
}(SpeakeasyBase));
export { SourcerepoProjectsReposTestIamPermissionsSecurityOption4 };
var SourcerepoProjectsReposTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposTestIamPermissionsSecurity, _super);
    function SourcerepoProjectsReposTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposTestIamPermissionsSecurityOption1)
    ], SourcerepoProjectsReposTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposTestIamPermissionsSecurityOption2)
    ], SourcerepoProjectsReposTestIamPermissionsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposTestIamPermissionsSecurityOption3)
    ], SourcerepoProjectsReposTestIamPermissionsSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SourcerepoProjectsReposTestIamPermissionsSecurityOption4)
    ], SourcerepoProjectsReposTestIamPermissionsSecurity.prototype, "option4", void 0);
    return SourcerepoProjectsReposTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { SourcerepoProjectsReposTestIamPermissionsSecurity };
var SourcerepoProjectsReposTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposTestIamPermissionsRequest, _super);
    function SourcerepoProjectsReposTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourcerepoProjectsReposTestIamPermissionsPathParams)
    ], SourcerepoProjectsReposTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourcerepoProjectsReposTestIamPermissionsQueryParams)
    ], SourcerepoProjectsReposTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], SourcerepoProjectsReposTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourcerepoProjectsReposTestIamPermissionsSecurity)
    ], SourcerepoProjectsReposTestIamPermissionsRequest.prototype, "security", void 0);
    return SourcerepoProjectsReposTestIamPermissionsRequest;
}(SpeakeasyBase));
export { SourcerepoProjectsReposTestIamPermissionsRequest };
var SourcerepoProjectsReposTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(SourcerepoProjectsReposTestIamPermissionsResponse, _super);
    function SourcerepoProjectsReposTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SourcerepoProjectsReposTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SourcerepoProjectsReposTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], SourcerepoProjectsReposTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return SourcerepoProjectsReposTestIamPermissionsResponse;
}(SpeakeasyBase));
export { SourcerepoProjectsReposTestIamPermissionsResponse };
