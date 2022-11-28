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
var DeploymentmanagerDeploymentsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsTestIamPermissionsPathParams, _super);
    function DeploymentmanagerDeploymentsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return DeploymentmanagerDeploymentsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsTestIamPermissionsPathParams };
var DeploymentmanagerDeploymentsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsTestIamPermissionsQueryParams, _super);
    function DeploymentmanagerDeploymentsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DeploymentmanagerDeploymentsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return DeploymentmanagerDeploymentsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsTestIamPermissionsQueryParams };
var DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1, _super);
    function DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1 };
var DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2, _super);
    function DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2 };
var DeploymentmanagerDeploymentsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsTestIamPermissionsSecurity, _super);
    function DeploymentmanagerDeploymentsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption1)
    ], DeploymentmanagerDeploymentsTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DeploymentmanagerDeploymentsTestIamPermissionsSecurityOption2)
    ], DeploymentmanagerDeploymentsTestIamPermissionsSecurity.prototype, "option2", void 0);
    return DeploymentmanagerDeploymentsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsTestIamPermissionsSecurity };
var DeploymentmanagerDeploymentsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsTestIamPermissionsRequest, _super);
    function DeploymentmanagerDeploymentsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsTestIamPermissionsPathParams)
    ], DeploymentmanagerDeploymentsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsTestIamPermissionsQueryParams)
    ], DeploymentmanagerDeploymentsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestPermissionsRequest)
    ], DeploymentmanagerDeploymentsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeploymentmanagerDeploymentsTestIamPermissionsSecurity)
    ], DeploymentmanagerDeploymentsTestIamPermissionsRequest.prototype, "security", void 0);
    return DeploymentmanagerDeploymentsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsTestIamPermissionsRequest };
var DeploymentmanagerDeploymentsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(DeploymentmanagerDeploymentsTestIamPermissionsResponse, _super);
    function DeploymentmanagerDeploymentsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeploymentmanagerDeploymentsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeploymentmanagerDeploymentsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestPermissionsResponse)
    ], DeploymentmanagerDeploymentsTestIamPermissionsResponse.prototype, "testPermissionsResponse", void 0);
    return DeploymentmanagerDeploymentsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { DeploymentmanagerDeploymentsTestIamPermissionsResponse };
