import { SpeakeasyBase } from "../../../internal/utils";
import { SoftwarePackage } from "./softwarepackage";
export declare enum ItemOriginTypeEnum {
    OriginTypeUnspecified = "ORIGIN_TYPE_UNSPECIFIED",
    InventoryReport = "INVENTORY_REPORT"
}
export declare enum ItemTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    InstalledPackage = "INSTALLED_PACKAGE",
    AvailablePackage = "AVAILABLE_PACKAGE"
}
/**
 * A single piece of inventory on a VM.
**/
export declare class Item extends SpeakeasyBase {
    availablePackage?: SoftwarePackage;
    createTime?: string;
    id?: string;
    installedPackage?: SoftwarePackage;
    originType?: ItemOriginTypeEnum;
    type?: ItemTypeEnum;
    updateTime?: string;
}
