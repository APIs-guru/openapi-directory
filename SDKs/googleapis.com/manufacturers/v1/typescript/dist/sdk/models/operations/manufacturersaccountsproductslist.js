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
var ManufacturersAccountsProductsListPathParams = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsListPathParams, _super);
    function ManufacturersAccountsProductsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListPathParams.prototype, "parent", void 0);
    return ManufacturersAccountsProductsListPathParams;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsListPathParams };
export var ManufacturersAccountsProductsListIncludeEnum;
(function (ManufacturersAccountsProductsListIncludeEnum) {
    ManufacturersAccountsProductsListIncludeEnum["Unknown"] = "UNKNOWN";
    ManufacturersAccountsProductsListIncludeEnum["Attributes"] = "ATTRIBUTES";
    ManufacturersAccountsProductsListIncludeEnum["Issues"] = "ISSUES";
    ManufacturersAccountsProductsListIncludeEnum["DestinationStatuses"] = "DESTINATION_STATUSES";
})(ManufacturersAccountsProductsListIncludeEnum || (ManufacturersAccountsProductsListIncludeEnum = {}));
var ManufacturersAccountsProductsListQueryParams = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsListQueryParams, _super);
    function ManufacturersAccountsProductsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", Array)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "include", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListQueryParams.prototype, "uploadProtocol", void 0);
    return ManufacturersAccountsProductsListQueryParams;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsListQueryParams };
var ManufacturersAccountsProductsListSecurity = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsListSecurity, _super);
    function ManufacturersAccountsProductsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ManufacturersAccountsProductsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ManufacturersAccountsProductsListSecurity.prototype, "oauth2c", void 0);
    return ManufacturersAccountsProductsListSecurity;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsListSecurity };
var ManufacturersAccountsProductsListRequest = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsListRequest, _super);
    function ManufacturersAccountsProductsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManufacturersAccountsProductsListPathParams)
    ], ManufacturersAccountsProductsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManufacturersAccountsProductsListQueryParams)
    ], ManufacturersAccountsProductsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ManufacturersAccountsProductsListSecurity)
    ], ManufacturersAccountsProductsListRequest.prototype, "security", void 0);
    return ManufacturersAccountsProductsListRequest;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsListRequest };
var ManufacturersAccountsProductsListResponse = /** @class */ (function (_super) {
    __extends(ManufacturersAccountsProductsListResponse, _super);
    function ManufacturersAccountsProductsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ManufacturersAccountsProductsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListProductsResponse)
    ], ManufacturersAccountsProductsListResponse.prototype, "listProductsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ManufacturersAccountsProductsListResponse.prototype, "statusCode", void 0);
    return ManufacturersAccountsProductsListResponse;
}(SpeakeasyBase));
export { ManufacturersAccountsProductsListResponse };
