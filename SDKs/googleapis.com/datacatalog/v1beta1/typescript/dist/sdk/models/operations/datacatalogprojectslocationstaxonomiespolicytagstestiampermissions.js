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
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsPathParams, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsPathParams.prototype, "resource", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsPathParams };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity.prototype, "oauth2c", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsPathParams)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsQueryParams)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsSecurity)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest.prototype, "security", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsRequest };
var DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse, _super);
    function DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse;
}(SpeakeasyBase));
export { DatacatalogProjectsLocationsTaxonomiesPolicyTagsTestIamPermissionsResponse };
