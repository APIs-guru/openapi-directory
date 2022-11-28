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
var SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams, _super);
    function SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams };
var SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams, _super);
    function SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams };
var SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity, _super);
    function SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity };
var SecuritycenterOrganizationsSourcesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesTestIamPermissionsRequest, _super);
    function SecuritycenterOrganizationsSourcesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesTestIamPermissionsPathParams)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesTestIamPermissionsQueryParams)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SecuritycenterOrganizationsSourcesTestIamPermissionsSecurity)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsRequest.prototype, "security", void 0);
    return SecuritycenterOrganizationsSourcesTestIamPermissionsRequest;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesTestIamPermissionsRequest };
var SecuritycenterOrganizationsSourcesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(SecuritycenterOrganizationsSourcesTestIamPermissionsResponse, _super);
    function SecuritycenterOrganizationsSourcesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], SecuritycenterOrganizationsSourcesTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return SecuritycenterOrganizationsSourcesTestIamPermissionsResponse;
}(SpeakeasyBase));
export { SecuritycenterOrganizationsSourcesTestIamPermissionsResponse };
