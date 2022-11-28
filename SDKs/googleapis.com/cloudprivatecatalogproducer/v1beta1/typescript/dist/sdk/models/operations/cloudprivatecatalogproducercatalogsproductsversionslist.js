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
var CloudprivatecatalogproducerCatalogsProductsVersionsListPathParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsListPathParams, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListPathParams.prototype, "parent", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsListPathParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsListPathParams };
var CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams };
var CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity.prototype, "oauth2c", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity };
var CloudprivatecatalogproducerCatalogsProductsVersionsListRequest = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsListRequest, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsVersionsListPathParams)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListRequest.prototype, "security", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsListRequest;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsListRequest };
var CloudprivatecatalogproducerCatalogsProductsVersionsListResponse = /** @class */ (function (_super) {
    __extends(CloudprivatecatalogproducerCatalogsProductsVersionsListResponse, _super);
    function CloudprivatecatalogproducerCatalogsProductsVersionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudprivatecatalogproducerCatalogsProductsVersionsListResponse.prototype, "statusCode", void 0);
    return CloudprivatecatalogproducerCatalogsProductsVersionsListResponse;
}(SpeakeasyBase));
export { CloudprivatecatalogproducerCatalogsProductsVersionsListResponse };
