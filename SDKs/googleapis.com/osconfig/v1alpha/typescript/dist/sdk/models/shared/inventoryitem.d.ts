import { SpeakeasyBase } from "../../../internal/utils";
import { InventorySoftwarePackage } from "./inventorysoftwarepackage";
export declare enum InventoryItemOriginTypeEnum {
    OriginTypeUnspecified = "ORIGIN_TYPE_UNSPECIFIED",
    InventoryReport = "INVENTORY_REPORT"
}
export declare enum InventoryItemTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    InstalledPackage = "INSTALLED_PACKAGE",
    AvailablePackage = "AVAILABLE_PACKAGE"
}
/**
 * A single piece of inventory on a VM.
**/
export declare class InventoryItem extends SpeakeasyBase {
    availablePackage?: InventorySoftwarePackage;
    createTime?: string;
    id?: string;
    installedPackage?: InventorySoftwarePackage;
    originType?: InventoryItemOriginTypeEnum;
    type?: InventoryItemTypeEnum;
    updateTime?: string;
}
