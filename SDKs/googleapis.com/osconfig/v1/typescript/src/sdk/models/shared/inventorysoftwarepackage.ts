import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InventoryVersionedPackage } from "./inventoryversionedpackage";
import { InventoryVersionedPackage } from "./inventoryversionedpackage";
import { InventoryVersionedPackage } from "./inventoryversionedpackage";
import { InventoryWindowsQuickFixEngineeringPackage } from "./inventorywindowsquickfixengineeringpackage";
import { InventoryWindowsApplication } from "./inventorywindowsapplication";
import { InventoryWindowsUpdatePackage } from "./inventorywindowsupdatepackage";
import { InventoryVersionedPackage } from "./inventoryversionedpackage";
import { InventoryVersionedPackage } from "./inventoryversionedpackage";
import { InventoryZypperPatch } from "./inventoryzypperpatch";


// InventorySoftwarePackage
/** 
 * Software package information of the operating system.
**/
export class InventorySoftwarePackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=aptPackage" })
  aptPackage?: InventoryVersionedPackage;

  @Metadata({ data: "json, name=cosPackage" })
  cosPackage?: InventoryVersionedPackage;

  @Metadata({ data: "json, name=googetPackage" })
  googetPackage?: InventoryVersionedPackage;

  @Metadata({ data: "json, name=qfePackage" })
  qfePackage?: InventoryWindowsQuickFixEngineeringPackage;

  @Metadata({ data: "json, name=windowsApplication" })
  windowsApplication?: InventoryWindowsApplication;

  @Metadata({ data: "json, name=wuaPackage" })
  wuaPackage?: InventoryWindowsUpdatePackage;

  @Metadata({ data: "json, name=yumPackage" })
  yumPackage?: InventoryVersionedPackage;

  @Metadata({ data: "json, name=zypperPackage" })
  zypperPackage?: InventoryVersionedPackage;

  @Metadata({ data: "json, name=zypperPatch" })
  zypperPatch?: InventoryZypperPatch;
}
