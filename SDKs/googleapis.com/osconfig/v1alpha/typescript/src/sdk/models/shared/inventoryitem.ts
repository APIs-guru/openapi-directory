import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventorySoftwarePackage } from "./inventorysoftwarepackage";
import { InventorySoftwarePackage } from "./inventorysoftwarepackage";

export enum InventoryItemOriginTypeEnum {
    OriginTypeUnspecified = "ORIGIN_TYPE_UNSPECIFIED"
,    InventoryReport = "INVENTORY_REPORT"
}

export enum InventoryItemTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    InstalledPackage = "INSTALLED_PACKAGE"
,    AvailablePackage = "AVAILABLE_PACKAGE"
}


// InventoryItem
/** 
 * A single piece of inventory on a VM.
**/
export class InventoryItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=availablePackage" })
  availablePackage?: InventorySoftwarePackage;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=installedPackage" })
  installedPackage?: InventorySoftwarePackage;

  @Metadata({ data: "json, name=originType" })
  originType?: InventoryItemOriginTypeEnum;

  @Metadata({ data: "json, name=type" })
  type?: InventoryItemTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
