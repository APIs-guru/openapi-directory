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
import { AdSlot } from "./adslot";
import { LastModifiedInfo } from "./lastmodifiedinfo";
import { Pricing } from "./pricing";
export var InventoryItemTypeEnum;
(function (InventoryItemTypeEnum) {
    InventoryItemTypeEnum["PlanningPlacementTypeRegular"] = "PLANNING_PLACEMENT_TYPE_REGULAR";
    InventoryItemTypeEnum["PlanningPlacementTypeCredit"] = "PLANNING_PLACEMENT_TYPE_CREDIT";
})(InventoryItemTypeEnum || (InventoryItemTypeEnum = {}));
// InventoryItem
/**
 * Represents a buy from the Planning inventory store.
**/
var InventoryItem = /** @class */ (function (_super) {
    __extends(InventoryItem, _super);
    function InventoryItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountId" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adSlots", elemType: AdSlot }),
        __metadata("design:type", Array)
    ], InventoryItem.prototype, "adSlots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentCategoryId" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "contentCategoryId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedClickThroughRate" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "estimatedClickThroughRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=estimatedConversionRate" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "estimatedConversionRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inPlan" }),
        __metadata("design:type", Boolean)
    ], InventoryItem.prototype, "inPlan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedInfo" }),
        __metadata("design:type", LastModifiedInfo)
    ], InventoryItem.prototype, "lastModifiedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=negotiationChannelId" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "negotiationChannelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=orderId" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "orderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=placementStrategyId" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "placementStrategyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pricing" }),
        __metadata("design:type", Pricing)
    ], InventoryItem.prototype, "pricing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rfpId" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "rfpId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=siteId" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "siteId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subaccountId" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "subaccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "type", void 0);
    return InventoryItem;
}(SpeakeasyBase));
export { InventoryItem };
