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
var ManufacturersAccountsProductsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsUpdatePathParams, _super);
    function ManufacturersAccountsProductsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdatePathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdatePathParams.prototype, "parent", void 0);
    return ManufacturersAccountsProductsUpdatePathParams;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsUpdatePathParams };
var ManufacturersAccountsProductsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsUpdateQueryParams, _super);
    function ManufacturersAccountsProductsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ManufacturersAccountsProductsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return ManufacturersAccountsProductsUpdateQueryParams;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsUpdateQueryParams };
var ManufacturersAccountsProductsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsUpdateSecurity, _super);
    function ManufacturersAccountsProductsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ManufacturersAccountsProductsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ManufacturersAccountsProductsUpdateSecurity.prototype, "oauth2c", void 0);
    return ManufacturersAccountsProductsUpdateSecurity;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsUpdateSecurity };
var ManufacturersAccountsProductsUpdateRequest = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsUpdateRequest, _super);
    function ManufacturersAccountsProductsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManufacturersAccountsProductsUpdatePathParams)
    ], ManufacturersAccountsProductsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManufacturersAccountsProductsUpdateQueryParams)
    ], ManufacturersAccountsProductsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Attributes)
    ], ManufacturersAccountsProductsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManufacturersAccountsProductsUpdateSecurity)
    ], ManufacturersAccountsProductsUpdateRequest.prototype, "security", void 0);
    return ManufacturersAccountsProductsUpdateRequest;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsUpdateRequest };
var ManufacturersAccountsProductsUpdateResponse = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsUpdateResponse, _super);
    function ManufacturersAccountsProductsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ManufacturersAccountsProductsUpdateResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ManufacturersAccountsProductsUpdateResponse.prototype, "statusCode", void 0);
    return ManufacturersAccountsProductsUpdateResponse;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsUpdateResponse };
