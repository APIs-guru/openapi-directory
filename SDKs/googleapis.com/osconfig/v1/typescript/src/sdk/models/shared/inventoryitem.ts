import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventorySoftwarePackage } from "./inventorysoftwarepackage";


export enum InventoryItemOriginTypeEnum {
    OriginTypeUnspecified = "ORIGIN_TYPE_UNSPECIFIED",
    InventoryReport = "INVENTORY_REPORT"
}

export enum InventoryItemTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    InstalledPackage = "INSTALLED_PACKAGE",
    AvailablePackage = "AVAILABLE_PACKAGE"
}


// InventoryItem
/** 
 * A single piece of inventory on a VM.
**/
export class InventoryItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availablePackage" })
  availablePackage?: InventorySoftwarePackage;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=installedPackage" })
  installedPackage?: InventorySoftwarePackage;

  @SpeakeasyMetadata({ data: "json, name=originType" })
  originType?: InventoryItemOriginTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InventoryItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
