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
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams.prototype, "parent", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams.prototype, "uploadProtocol", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity.prototype, "oauth2c", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportPathParams)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportQueryParams)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDiscoveryengineV1betaImportDocumentsRequest)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportSecurity)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest.prototype, "security", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportRequest };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse.prototype, "statusCode", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsImportResponse };
