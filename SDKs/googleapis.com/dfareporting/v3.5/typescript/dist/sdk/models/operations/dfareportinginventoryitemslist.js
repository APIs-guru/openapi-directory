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
var DfareportingInventoryItemsListPathParams = /** @class */ (function (_super) {
    __extends(DfareportingInventoryItemsListPathParams, _super);
    function DfareportingInventoryItemsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListPathParams.prototype, "projectId", void 0);
    return DfareportingInventoryItemsListPathParams;
}(SpeakeasyBase));
export { DfareportingInventoryItemsListPathParams };
export var DfareportingInventoryItemsListSortFieldEnum;
(function (DfareportingInventoryItemsListSortFieldEnum) {
    DfareportingInventoryItemsListSortFieldEnum["Id"] = "ID";
    DfareportingInventoryItemsListSortFieldEnum["Name"] = "NAME";
})(DfareportingInventoryItemsListSortFieldEnum || (DfareportingInventoryItemsListSortFieldEnum = {}));
export var DfareportingInventoryItemsListSortOrderEnum;
(function (DfareportingInventoryItemsListSortOrderEnum) {
    DfareportingInventoryItemsListSortOrderEnum["Ascending"] = "ASCENDING";
    DfareportingInventoryItemsListSortOrderEnum["Descending"] = "DESCENDING";
})(DfareportingInventoryItemsListSortOrderEnum || (DfareportingInventoryItemsListSortOrderEnum = {}));
export var DfareportingInventoryItemsListTypeEnum;
(function (DfareportingInventoryItemsListTypeEnum) {
    DfareportingInventoryItemsListTypeEnum["PlanningPlacementTypeRegular"] = "PLANNING_PLACEMENT_TYPE_REGULAR";
    DfareportingInventoryItemsListTypeEnum["PlanningPlacementTypeCredit"] = "PLANNING_PLACEMENT_TYPE_CREDIT";
})(DfareportingInventoryItemsListTypeEnum || (DfareportingInventoryItemsListTypeEnum = {}));
var DfareportingInventoryItemsListQueryParams = /** @class */ (function (_super) {
    __extends(DfareportingInventoryItemsListQueryParams, _super);
    function DfareportingInventoryItemsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", Array)
    ], DfareportingInventoryItemsListQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inPlan" }),
        __metadata("design:type", Boolean)
    ], DfareportingInventoryItemsListQueryParams.prototype, "inPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DfareportingInventoryItemsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderId" }),
        __metadata("design:type", Array)
    ], DfareportingInventoryItemsListQueryParams.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DfareportingInventoryItemsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=siteId" }),
        __metadata("design:type", Array)
    ], DfareportingInventoryItemsListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "sortField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListQueryParams.prototype, "uploadProtocol", void 0);
    return DfareportingInventoryItemsListQueryParams;
}(SpeakeasyBase));
export { DfareportingInventoryItemsListQueryParams };
var DfareportingInventoryItemsListSecurity = /** @class */ (function (_super) {
    __extends(DfareportingInventoryItemsListSecurity, _super);
    function DfareportingInventoryItemsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DfareportingInventoryItemsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DfareportingInventoryItemsListSecurity.prototype, "oauth2c", void 0);
    return DfareportingInventoryItemsListSecurity;
}(SpeakeasyBase));
export { DfareportingInventoryItemsListSecurity };
var DfareportingInventoryItemsListRequest = /** @class */ (function (_super) {
    __extends(DfareportingInventoryItemsListRequest, _super);
    function DfareportingInventoryItemsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingInventoryItemsListPathParams)
    ], DfareportingInventoryItemsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingInventoryItemsListQueryParams)
    ], DfareportingInventoryItemsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DfareportingInventoryItemsListSecurity)
    ], DfareportingInventoryItemsListRequest.prototype, "security", void 0);
    return DfareportingInventoryItemsListRequest;
}(SpeakeasyBase));
export { DfareportingInventoryItemsListRequest };
var DfareportingInventoryItemsListResponse = /** @class */ (function (_super) {
    __extends(DfareportingInventoryItemsListResponse, _super);
    function DfareportingInventoryItemsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DfareportingInventoryItemsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InventoryItemsListResponse)
    ], DfareportingInventoryItemsListResponse.prototype, "inventoryItemsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DfareportingInventoryItemsListResponse.prototype, "statusCode", void 0);
    return DfareportingInventoryItemsListResponse;
}(SpeakeasyBase));
export { DfareportingInventoryItemsListResponse };
