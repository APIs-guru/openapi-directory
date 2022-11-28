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
var IntegrationsProjectsLocationsProductsAuthConfigsListPathParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsAuthConfigsListPathParams, _super);
    function IntegrationsProjectsLocationsProductsAuthConfigsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListPathParams.prototype, "parent", void 0);
    return IntegrationsProjectsLocationsProductsAuthConfigsListPathParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsAuthConfigsListPathParams };
var IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams, _super);
    function IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams.prototype, "uploadProtocol", void 0);
    return IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams };
var IntegrationsProjectsLocationsProductsAuthConfigsListSecurity = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsAuthConfigsListSecurity, _super);
    function IntegrationsProjectsLocationsProductsAuthConfigsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListSecurity.prototype, "oauth2c", void 0);
    return IntegrationsProjectsLocationsProductsAuthConfigsListSecurity;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsAuthConfigsListSecurity };
var IntegrationsProjectsLocationsProductsAuthConfigsListRequest = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsAuthConfigsListRequest, _super);
    function IntegrationsProjectsLocationsProductsAuthConfigsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsAuthConfigsListPathParams)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsAuthConfigsListQueryParams)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", IntegrationsProjectsLocationsProductsAuthConfigsListSecurity)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListRequest.prototype, "security", void 0);
    return IntegrationsProjectsLocationsProductsAuthConfigsListRequest;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsAuthConfigsListRequest };
var IntegrationsProjectsLocationsProductsAuthConfigsListResponse = /** @class */ (function (_super) {
    __extends(IntegrationsProjectsLocationsProductsAuthConfigsListResponse, _super);
    function IntegrationsProjectsLocationsProductsAuthConfigsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleCloudIntegrationsV1alphaListAuthConfigsResponse)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListResponse.prototype, "googleCloudIntegrationsV1alphaListAuthConfigsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], IntegrationsProjectsLocationsProductsAuthConfigsListResponse.prototype, "statusCode", void 0);
    return IntegrationsProjectsLocationsProductsAuthConfigsListResponse;
}(SpeakeasyBase));
export { IntegrationsProjectsLocationsProductsAuthConfigsListResponse };
