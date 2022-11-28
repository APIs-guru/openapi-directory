import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SoftwarePackage } from "./softwarepackage";


export enum ItemOriginTypeEnum {
    OriginTypeUnspecified = "ORIGIN_TYPE_UNSPECIFIED",
    InventoryReport = "INVENTORY_REPORT"
}

export enum ItemTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    InstalledPackage = "INSTALLED_PACKAGE",
    AvailablePackage = "AVAILABLE_PACKAGE"
}


// Item
/** 
 * A single piece of inventory on a VM.
**/
export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availablePackage" })
  availablePackage?: SoftwarePackage;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=installedPackage" })
  installedPackage?: SoftwarePackage;

  @SpeakeasyMetadata({ data: "json, name=originType" })
  originType?: ItemOriginTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ItemTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
