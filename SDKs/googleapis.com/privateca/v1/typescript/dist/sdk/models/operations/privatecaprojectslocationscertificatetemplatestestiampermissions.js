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
var PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams };
var PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams };
var PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity };
var PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsPathParams)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsQueryParams)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest.prototype, "security", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest };
var PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse, _super);
    function PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse;
}(SpeakeasyBase));
export { PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsResponse };
