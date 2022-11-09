import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SoftwarePackage } from "./softwarepackage";
import { SoftwarePackage } from "./softwarepackage";

export enum ItemOriginTypeEnum {
    OriginTypeUnspecified = "ORIGIN_TYPE_UNSPECIFIED"
,    InventoryReport = "INVENTORY_REPORT"
}

export enum ItemTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    InstalledPackage = "INSTALLED_PACKAGE"
,    AvailablePackage = "AVAILABLE_PACKAGE"
}


// Item
/** 
 * A single piece of inventory on a VM.
**/
export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=availablePackage" })
  availablePackage?: SoftwarePackage;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=installedPackage" })
  installedPackage?: SoftwarePackage;

  @Metadata({ data: "json, name=originType" })
  originType?: ItemOriginTypeEnum;

  @Metadata({ data: "json, name=type" })
  type?: ItemTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
