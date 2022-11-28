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
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams.prototype, "name", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowMissing" }),
        __metadata("design:type", Boolean)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "allowMissing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity.prototype, "oauth2c", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchPathParams)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchQueryParams)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDiscoveryengineV1alphaDocument)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchSecurity)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest.prototype, "security", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchRequest };
var DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse = /** @class */ (function (_super) {
    __extends(DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse, _super);
    function DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudDiscoveryengineV1alphaDocument)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse.prototype, "googleCloudDiscoveryengineV1alphaDocument", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse.prototype, "statusCode", void 0);
    return DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse;
}(SpeakeasyBase));
export { DiscoveryengineProjectsLocationsDataStoresBranchesDocumentsPatchResponse };
