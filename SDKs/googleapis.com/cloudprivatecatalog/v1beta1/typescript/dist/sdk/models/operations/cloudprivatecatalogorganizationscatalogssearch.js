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
var CloudprivatecatalogOrganizationsCatalogsSearchPathParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogOrganizationsCatalogsSearchPathParams, _super);
    function CloudprivatecatalogOrganizationsCatalogsSearchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchPathParams.prototype, "resource", void 0);
    return CloudprivatecatalogOrganizationsCatalogsSearchPathParams;
}(SpeakeasyBase));
export { CloudprivatecatalogOrganizationsCatalogsSearchPathParams };
var CloudprivatecatalogOrganizationsCatalogsSearchQueryParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogOrganizationsCatalogsSearchQueryParams, _super);
    function CloudprivatecatalogOrganizationsCatalogsSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprivatecatalogOrganizationsCatalogsSearchQueryParams;
}(SpeakeasyBase));
export { CloudprivatecatalogOrganizationsCatalogsSearchQueryParams };
var CloudprivatecatalogOrganizationsCatalogsSearchSecurity = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogOrganizationsCatalogsSearchSecurity, _super);
    function CloudprivatecatalogOrganizationsCatalogsSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprivatecatalogOrganizationsCatalogsSearchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprivatecatalogOrganizationsCatalogsSearchSecurity.prototype, "oauth2c", void 0);
    return CloudprivatecatalogOrganizationsCatalogsSearchSecurity;
}(SpeakeasyBase));
export { CloudprivatecatalogOrganizationsCatalogsSearchSecurity };
var CloudprivatecatalogOrganizationsCatalogsSearchRequest = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogOrganizationsCatalogsSearchRequest, _super);
    function CloudprivatecatalogOrganizationsCatalogsSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogOrganizationsCatalogsSearchPathParams)
    ], CloudprivatecatalogOrganizationsCatalogsSearchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogOrganizationsCatalogsSearchQueryParams)
    ], CloudprivatecatalogOrganizationsCatalogsSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogOrganizationsCatalogsSearchSecurity)
    ], CloudprivatecatalogOrganizationsCatalogsSearchRequest.prototype, "security", void 0);
    return CloudprivatecatalogOrganizationsCatalogsSearchRequest;
}(SpeakeasyBase));
export { CloudprivatecatalogOrganizationsCatalogsSearchRequest };
var CloudprivatecatalogOrganizationsCatalogsSearchResponse = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogOrganizationsCatalogsSearchResponse, _super);
    function CloudprivatecatalogOrganizationsCatalogsSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CloudprivatecatalogOrganizationsCatalogsSearchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudprivatecatalogOrganizationsCatalogsSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudprivatecatalogOrganizationsCatalogsSearchResponse.prototype, "statusCode", void 0);
    return CloudprivatecatalogOrganizationsCatalogsSearchResponse;
}(SpeakeasyBase));
export { CloudprivatecatalogOrganizationsCatalogsSearchResponse };
