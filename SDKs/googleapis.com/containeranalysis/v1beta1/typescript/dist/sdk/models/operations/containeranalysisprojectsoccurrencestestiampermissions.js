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
var ContaineranalysisProjectsOccurrencesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesTestIamPermissionsPathParams, _super);
    function ContaineranalysisProjectsOccurrencesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return ContaineranalysisProjectsOccurrencesTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesTestIamPermissionsPathParams };
var ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams, _super);
    function ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams };
var ContaineranalysisProjectsOccurrencesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesTestIamPermissionsSecurity, _super);
    function ContaineranalysisProjectsOccurrencesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return ContaineranalysisProjectsOccurrencesTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesTestIamPermissionsSecurity };
var ContaineranalysisProjectsOccurrencesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesTestIamPermissionsRequest, _super);
    function ContaineranalysisProjectsOccurrencesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsOccurrencesTestIamPermissionsPathParams)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsOccurrencesTestIamPermissionsQueryParams)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContaineranalysisProjectsOccurrencesTestIamPermissionsSecurity)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsRequest.prototype, "security", void 0);
    return ContaineranalysisProjectsOccurrencesTestIamPermissionsRequest;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesTestIamPermissionsRequest };
var ContaineranalysisProjectsOccurrencesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(ContaineranalysisProjectsOccurrencesTestIamPermissionsResponse, _super);
    function ContaineranalysisProjectsOccurrencesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], ContaineranalysisProjectsOccurrencesTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return ContaineranalysisProjectsOccurrencesTestIamPermissionsResponse;
}(SpeakeasyBase));
export { ContaineranalysisProjectsOccurrencesTestIamPermissionsResponse };
