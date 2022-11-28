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
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams.prototype, "parent", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=documentId" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "documentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity.prototype, "oauth2c", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreatePathParams)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateQueryParams)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDiscoveryengineV1betaDocument)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateSecurity)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest.prototype, "security", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateRequest };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDiscoveryengineV1betaDocument)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse.prototype, "googleCloudDiscoveryengineV1betaDocument", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse.prototype, "statusCode", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsCreateResponse };
