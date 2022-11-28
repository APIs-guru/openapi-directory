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
var DcimInventoryItemsListQueryParams = /** @class */ (function (_super) {
    __extends(DcimInventoryItemsListQueryParams, _super);
    function DcimInventoryItemsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "assetTag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__ic" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "assetTagIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__ie" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "assetTagIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__iew" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "assetTagIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__isw" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "assetTagIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "assetTagN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nic" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "assetTagNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nie" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "assetTagNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__niew" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "assetTagNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_tag__nisw" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "assetTagNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "deviceN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_id__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "deviceIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=discovered" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "discovered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gt" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "idGt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__gte" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "idGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lt" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "idLt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__lte" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "idLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "idN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DcimInventoryItemsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "manufacturerN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "manufacturerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=manufacturer_id__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "manufacturerIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ic" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "nameIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__ie" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "nameIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__iew" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "nameIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__isw" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "nameIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "nameN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nic" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "nameNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nie" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "nameNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__niew" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "nameNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name__nisw" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "nameNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DcimInventoryItemsListQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent_id" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "parentId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent_id__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "parentIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "partId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__ic" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "partIdIc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__ie" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "partIdIe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__iew" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "partIdIew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__isw" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "partIdIsw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "partIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__nic" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "partIdNic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__nie" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "partIdNie", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__niew" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "partIdNiew", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=part_id__nisw" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "partIdNisw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "q", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "regionN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "regionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=region_id__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "regionIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serial" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "siteN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "siteIdN", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "tag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag__n" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsListQueryParams.prototype, "tagN", void 0);
    return DcimInventoryItemsListQueryParams;
}(SpeakeasyBase));
export { DcimInventoryItemsListQueryParams };
var DcimInventoryItemsList200ApplicationJson = /** @class */ (function (_super) {
    __extends(DcimInventoryItemsList200ApplicationJson, _super);
    function DcimInventoryItemsList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], DcimInventoryItemsList200ApplicationJson.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], DcimInventoryItemsList200ApplicationJson.prototype, "previous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.InventoryItem }),
        __metadata("design:type", Array)
    ], DcimInventoryItemsList200ApplicationJson.prototype, "results", void 0);
    return DcimInventoryItemsList200ApplicationJson;
}(SpeakeasyBase));
export { DcimInventoryItemsList200ApplicationJson };
var DcimInventoryItemsListRequest = /** @class */ (function (_super) {
    __extends(DcimInventoryItemsListRequest, _super);
    function DcimInventoryItemsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimInventoryItemsListQueryParams)
    ], DcimInventoryItemsListRequest.prototype, "queryParams", void 0);
    return DcimInventoryItemsListRequest;
}(SpeakeasyBase));
export { DcimInventoryItemsListRequest };
var DcimInventoryItemsListResponse = /** @class */ (function (_super) {
    __extends(DcimInventoryItemsListResponse, _super);
    function DcimInventoryItemsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DcimInventoryItemsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DcimInventoryItemsListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DcimInventoryItemsList200ApplicationJson)
    ], DcimInventoryItemsListResponse.prototype, "dcimInventoryItemsList200ApplicationJsonObject", void 0);
    return DcimInventoryItemsListResponse;
}(SpeakeasyBase));
export { DcimInventoryItemsListResponse };
