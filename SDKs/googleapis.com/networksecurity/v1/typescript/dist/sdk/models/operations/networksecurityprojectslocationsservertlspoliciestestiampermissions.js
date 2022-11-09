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
var NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsPathParams, _super);
    function NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsPathParams };
var NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams, _super);
    function NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams };
var NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity, _super);
    function NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity };
var NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest, _super);
    function NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsPathParams)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsQueryParams)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleIamV1TestIamPermissionsRequest)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsSecurity)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest.prototype, "security", void 0);
    return NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest };
var NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse, _super);
    function NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleIamV1TestIamPermissionsResponse)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse.prototype, "googleIamV1TestIamPermissionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    return NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse;
}(SpeakeasyBase));
export { NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse };
