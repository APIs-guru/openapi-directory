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
var CloudresourcemanagerProjectsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsTestIamPermissionsPathParams, _super);
    function CloudresourcemanagerProjectsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return CloudresourcemanagerProjectsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsTestIamPermissionsPathParams };
var CloudresourcemanagerProjectsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsTestIamPermissionsQueryParams, _super);
    function CloudresourcemanagerProjectsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerProjectsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerProjectsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsTestIamPermissionsQueryParams };
var CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1, _super);
    function CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1 };
var CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2, _super);
    function CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2 };
var CloudresourcemanagerProjectsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsTestIamPermissionsSecurity, _super);
    function CloudresourcemanagerProjectsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsTestIamPermissionsSecurityOption1)
    ], CloudresourcemanagerProjectsTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerProjectsTestIamPermissionsSecurityOption2)
    ], CloudresourcemanagerProjectsTestIamPermissionsSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerProjectsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsTestIamPermissionsSecurity };
var CloudresourcemanagerProjectsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsTestIamPermissionsRequest, _super);
    function CloudresourcemanagerProjectsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsTestIamPermissionsPathParams)
    ], CloudresourcemanagerProjectsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsTestIamPermissionsQueryParams)
    ], CloudresourcemanagerProjectsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], CloudresourcemanagerProjectsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerProjectsTestIamPermissionsSecurity)
    ], CloudresourcemanagerProjectsTestIamPermissionsRequest.prototype, "security", void 0);
    return CloudresourcemanagerProjectsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsTestIamPermissionsRequest };
var CloudresourcemanagerProjectsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerProjectsTestIamPermissionsResponse, _super);
    function CloudresourcemanagerProjectsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerProjectsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerProjectsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], CloudresourcemanagerProjectsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return CloudresourcemanagerProjectsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerProjectsTestIamPermissionsResponse };
