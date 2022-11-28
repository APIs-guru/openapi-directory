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
export var ProductClusterBrandInventoryStatusEnum;
(function (ProductClusterBrandInventoryStatusEnum) {
    ProductClusterBrandInventoryStatusEnum["InventoryStatusUnspecified"] = "INVENTORY_STATUS_UNSPECIFIED";
    ProductClusterBrandInventoryStatusEnum["InStock"] = "IN_STOCK";
    ProductClusterBrandInventoryStatusEnum["OutOfStock"] = "OUT_OF_STOCK";
    ProductClusterBrandInventoryStatusEnum["NotInInventory"] = "NOT_IN_INVENTORY";
})(ProductClusterBrandInventoryStatusEnum || (ProductClusterBrandInventoryStatusEnum = {}));
export var ProductClusterInventoryStatusEnum;
(function (ProductClusterInventoryStatusEnum) {
    ProductClusterInventoryStatusEnum["InventoryStatusUnspecified"] = "INVENTORY_STATUS_UNSPECIFIED";
    ProductClusterInventoryStatusEnum["InStock"] = "IN_STOCK";
    ProductClusterInventoryStatusEnum["OutOfStock"] = "OUT_OF_STOCK";
    ProductClusterInventoryStatusEnum["NotInInventory"] = "NOT_IN_INVENTORY";
})(ProductClusterInventoryStatusEnum || (ProductClusterInventoryStatusEnum = {}));
// ProductCluster
/**
 * Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query.
**/
var ProductCluster = /** @class */ (function (_super) {
    __extends(ProductCluster, _super);
    function ProductCluster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], ProductCluster.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brandInventoryStatus" }),
        __metadata("design:type", String)
    ], ProductCluster.prototype, "brandInventoryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryL1" }),
        __metadata("design:type", String)
    ], ProductCluster.prototype, "categoryL1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryL2" }),
        __metadata("design:type", String)
    ], ProductCluster.prototype, "categoryL2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryL3" }),
        __metadata("design:type", String)
    ], ProductCluster.prototype, "categoryL3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryL4" }),
        __metadata("design:type", String)
    ], ProductCluster.prototype, "categoryL4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categoryL5" }),
        __metadata("design:type", String)
    ], ProductCluster.prototype, "categoryL5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventoryStatus" }),
        __metadata("design:type", String)
    ], ProductCluster.prototype, "inventoryStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ProductCluster.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=variantGtins" }),
        __metadata("design:type", Array)
    ], ProductCluster.prototype, "variantGtins", void 0);
    return ProductCluster;
}(SpeakeasyBase));
export { ProductCluster };
