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
var VmmigrationProjectsLocationsSourcesFetchInventoryPathParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesFetchInventoryPathParams, _super);
    function VmmigrationProjectsLocationsSourcesFetchInventoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryPathParams.prototype, "source", void 0);
    return VmmigrationProjectsLocationsSourcesFetchInventoryPathParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesFetchInventoryPathParams };
var VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams, _super);
    function VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=forceRefresh" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "forceRefresh", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams.prototype, "uploadProtocol", void 0);
    return VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams };
var VmmigrationProjectsLocationsSourcesFetchInventorySecurity = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesFetchInventorySecurity, _super);
    function VmmigrationProjectsLocationsSourcesFetchInventorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VmmigrationProjectsLocationsSourcesFetchInventorySecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VmmigrationProjectsLocationsSourcesFetchInventorySecurity.prototype, "oauth2c", void 0);
    return VmmigrationProjectsLocationsSourcesFetchInventorySecurity;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesFetchInventorySecurity };
var VmmigrationProjectsLocationsSourcesFetchInventoryRequest = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesFetchInventoryRequest, _super);
    function VmmigrationProjectsLocationsSourcesFetchInventoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesFetchInventoryPathParams)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesFetchInventoryQueryParams)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VmmigrationProjectsLocationsSourcesFetchInventorySecurity)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryRequest.prototype, "security", void 0);
    return VmmigrationProjectsLocationsSourcesFetchInventoryRequest;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesFetchInventoryRequest };
var VmmigrationProjectsLocationsSourcesFetchInventoryResponse = /** @class */ (function (_super) {
    __extends(VmmigrationProjectsLocationsSourcesFetchInventoryResponse, _super);
    function VmmigrationProjectsLocationsSourcesFetchInventoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FetchInventoryResponse)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryResponse.prototype, "fetchInventoryResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VmmigrationProjectsLocationsSourcesFetchInventoryResponse.prototype, "statusCode", void 0);
    return VmmigrationProjectsLocationsSourcesFetchInventoryResponse;
}(SpeakeasyBase));
export { VmmigrationProjectsLocationsSourcesFetchInventoryResponse };
