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
var ManufacturersAccountsProductsDeletePathParams = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsDeletePathParams, _super);
    function ManufacturersAccountsProductsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeletePathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeletePathParams.prototype, "parent", void 0);
    return ManufacturersAccountsProductsDeletePathParams;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsDeletePathParams };
var ManufacturersAccountsProductsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsDeleteQueryParams, _super);
    function ManufacturersAccountsProductsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ManufacturersAccountsProductsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return ManufacturersAccountsProductsDeleteQueryParams;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsDeleteQueryParams };
var ManufacturersAccountsProductsDeleteSecurity = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsDeleteSecurity, _super);
    function ManufacturersAccountsProductsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ManufacturersAccountsProductsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ManufacturersAccountsProductsDeleteSecurity.prototype, "oauth2c", void 0);
    return ManufacturersAccountsProductsDeleteSecurity;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsDeleteSecurity };
var ManufacturersAccountsProductsDeleteRequest = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsDeleteRequest, _super);
    function ManufacturersAccountsProductsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManufacturersAccountsProductsDeletePathParams)
    ], ManufacturersAccountsProductsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManufacturersAccountsProductsDeleteQueryParams)
    ], ManufacturersAccountsProductsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManufacturersAccountsProductsDeleteSecurity)
    ], ManufacturersAccountsProductsDeleteRequest.prototype, "security", void 0);
    return ManufacturersAccountsProductsDeleteRequest;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsDeleteRequest };
var ManufacturersAccountsProductsDeleteResponse = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsDeleteResponse, _super);
    function ManufacturersAccountsProductsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ManufacturersAccountsProductsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ManufacturersAccountsProductsDeleteResponse.prototype, "statusCode", void 0);
    return ManufacturersAccountsProductsDeleteResponse;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsDeleteResponse };
