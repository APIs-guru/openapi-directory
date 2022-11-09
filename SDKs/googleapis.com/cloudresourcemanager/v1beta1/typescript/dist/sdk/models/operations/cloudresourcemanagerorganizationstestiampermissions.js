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
var CloudresourcemanagerOrganizationsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsTestIamPermissionsPathParams, _super);
    function CloudresourcemanagerOrganizationsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerOrganizationsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsTestIamPermissionsPathParams };
var CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams, _super);
    function CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams };
var CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1, _super);
    function CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1 };
var CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption2, _super);
    function CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption2 };
var CloudresourcemanagerOrganizationsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsTestIamPermissionsSecurity, _super);
    function CloudresourcemanagerOrganizationsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption1)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerOrganizationsTestIamPermissionsSecurityOption2)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerOrganizationsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsTestIamPermissionsSecurity };
var CloudresourcemanagerOrganizationsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsTestIamPermissionsRequest, _super);
    function CloudresourcemanagerOrganizationsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsTestIamPermissionsPathParams)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsTestIamPermissionsQueryParams)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudresourcemanagerOrganizationsTestIamPermissionsSecurity)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsRequest.prototype, "security", void 0);
    return CloudresourcemanagerOrganizationsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsTestIamPermissionsRequest };
var CloudresourcemanagerOrganizationsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerOrganizationsTestIamPermissionsResponse, _super);
    function CloudresourcemanagerOrganizationsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], CloudresourcemanagerOrganizationsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return CloudresourcemanagerOrganizationsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerOrganizationsTestIamPermissionsResponse };
