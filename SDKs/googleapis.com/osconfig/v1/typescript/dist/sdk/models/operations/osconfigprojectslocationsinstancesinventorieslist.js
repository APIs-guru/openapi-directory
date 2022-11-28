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
var OsconfigProjectsLocationsInstancesInventoriesListPathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsInstancesInventoriesListPathParams, _super);
    function OsconfigProjectsLocationsInstancesInventoriesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListPathParams.prototype, "parent", void 0);
    return OsconfigProjectsLocationsInstancesInventoriesListPathParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsInstancesInventoriesListPathParams };
export var OsconfigProjectsLocationsInstancesInventoriesListViewEnum;
(function (OsconfigProjectsLocationsInstancesInventoriesListViewEnum) {
    OsconfigProjectsLocationsInstancesInventoriesListViewEnum["InventoryViewUnspecified"] = "INVENTORY_VIEW_UNSPECIFIED";
    OsconfigProjectsLocationsInstancesInventoriesListViewEnum["Basic"] = "BASIC";
    OsconfigProjectsLocationsInstancesInventoriesListViewEnum["Full"] = "FULL";
})(OsconfigProjectsLocationsInstancesInventoriesListViewEnum || (OsconfigProjectsLocationsInstancesInventoriesListViewEnum = {}));
var OsconfigProjectsLocationsInstancesInventoriesListQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsInstancesInventoriesListQueryParams, _super);
    function OsconfigProjectsLocationsInstancesInventoriesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListQueryParams.prototype, "view", void 0);
    return OsconfigProjectsLocationsInstancesInventoriesListQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsInstancesInventoriesListQueryParams };
var OsconfigProjectsLocationsInstancesInventoriesListSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsInstancesInventoriesListSecurity, _super);
    function OsconfigProjectsLocationsInstancesInventoriesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsLocationsInstancesInventoriesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsLocationsInstancesInventoriesListSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsLocationsInstancesInventoriesListSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsInstancesInventoriesListSecurity };
var OsconfigProjectsLocationsInstancesInventoriesListRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsInstancesInventoriesListRequest, _super);
    function OsconfigProjectsLocationsInstancesInventoriesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsInstancesInventoriesListPathParams)
    ], OsconfigProjectsLocationsInstancesInventoriesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsInstancesInventoriesListQueryParams)
    ], OsconfigProjectsLocationsInstancesInventoriesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsLocationsInstancesInventoriesListSecurity)
    ], OsconfigProjectsLocationsInstancesInventoriesListRequest.prototype, "security", void 0);
    return OsconfigProjectsLocationsInstancesInventoriesListRequest;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsInstancesInventoriesListRequest };
var OsconfigProjectsLocationsInstancesInventoriesListResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsLocationsInstancesInventoriesListResponse, _super);
    function OsconfigProjectsLocationsInstancesInventoriesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsLocationsInstancesInventoriesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListInventoriesResponse)
    ], OsconfigProjectsLocationsInstancesInventoriesListResponse.prototype, "listInventoriesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsLocationsInstancesInventoriesListResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsLocationsInstancesInventoriesListResponse;
}(SpeakeasyBase));
export { OsconfigProjectsLocationsInstancesInventoriesListResponse };
