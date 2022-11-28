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
import { InventorySoftwarePackage } from "./inventorysoftwarepackage";
export var InventoryItemOriginTypeEnum;
(function (InventoryItemOriginTypeEnum) {
    InventoryItemOriginTypeEnum["OriginTypeUnspecified"] = "ORIGIN_TYPE_UNSPECIFIED";
    InventoryItemOriginTypeEnum["InventoryReport"] = "INVENTORY_REPORT";
})(InventoryItemOriginTypeEnum || (InventoryItemOriginTypeEnum = {}));
export var InventoryItemTypeEnum;
(function (InventoryItemTypeEnum) {
    InventoryItemTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    InventoryItemTypeEnum["InstalledPackage"] = "INSTALLED_PACKAGE";
    InventoryItemTypeEnum["AvailablePackage"] = "AVAILABLE_PACKAGE";
})(InventoryItemTypeEnum || (InventoryItemTypeEnum = {}));
// InventoryItem
/**
 * A single piece of inventory on a VM.
**/
var InventoryItem = /** @class */ (function (_super) {
    __extends(InventoryItem, _super);
    function InventoryItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availablePackage" }),
        __metadata("design:type", InventorySoftwarePackage)
    ], InventoryItem.prototype, "availablePackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=installedPackage" }),
        __metadata("design:type", InventorySoftwarePackage)
    ], InventoryItem.prototype, "installedPackage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=originType" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "originType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], InventoryItem.prototype, "updateTime", void 0);
    return InventoryItem;
}(SpeakeasyBase));
export { InventoryItem };
