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
var ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams, _super);
    function ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams };
var ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams, _super);
    function ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams };
var ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity, _super);
    function ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity };
var ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest, _super);
    function ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsPathParams)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsQueryParams)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsSecurity)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest.prototype, "security", void 0);
    return ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsRequest };
var ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse, _super);
    function ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse;
}(SpeakeasyBase));
export { ServicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissionsResponse };
