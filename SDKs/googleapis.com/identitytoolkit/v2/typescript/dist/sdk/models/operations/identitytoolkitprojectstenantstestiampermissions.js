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
var IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams, _super);
    function IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams };
var IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams, _super);
    function IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams };
var IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1, _super);
    function IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1 };
var IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2, _super);
    function IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2 };
var IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity, _super);
    function IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption1)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", IdentitytoolkitProjectsTenantsTestIamPermissionsSecurityOption2)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity.prototype, "option2", void 0);
    return IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity };
var IdentitytoolkitProjectsTenantsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsTestIamPermissionsRequest, _super);
    function IdentitytoolkitProjectsTenantsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsTestIamPermissionsPathParams)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsTestIamPermissionsQueryParams)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleIamV1TestIamPermissionsRequest)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IdentitytoolkitProjectsTenantsTestIamPermissionsSecurity)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsRequest.prototype, "security", void 0);
    return IdentitytoolkitProjectsTenantsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsTestIamPermissionsRequest };
var IdentitytoolkitProjectsTenantsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(IdentitytoolkitProjectsTenantsTestIamPermissionsResponse, _super);
    function IdentitytoolkitProjectsTenantsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleIamV1TestIamPermissionsResponse)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsResponse.prototype, "googleIamV1TestIamPermissionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IdentitytoolkitProjectsTenantsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    return IdentitytoolkitProjectsTenantsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { IdentitytoolkitProjectsTenantsTestIamPermissionsResponse };
