import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventoryVersionedPackage } from "./inventoryversionedpackage";
import { InventoryWindowsQuickFixEngineeringPackage } from "./inventorywindowsquickfixengineeringpackage";
import { InventoryWindowsApplication } from "./inventorywindowsapplication";
import { InventoryWindowsUpdatePackage } from "./inventorywindowsupdatepackage";
import { InventoryZypperPatch } from "./inventoryzypperpatch";



// InventorySoftwarePackage
/** 
 * Software package information of the operating system.
**/
export class InventorySoftwarePackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aptPackage" })
  aptPackage?: InventoryVersionedPackage;

  @SpeakeasyMetadata({ data: "json, name=cosPackage" })
  cosPackage?: InventoryVersionedPackage;

  @SpeakeasyMetadata({ data: "json, name=googetPackage" })
  googetPackage?: InventoryVersionedPackage;

  @SpeakeasyMetadata({ data: "json, name=qfePackage" })
  qfePackage?: InventoryWindowsQuickFixEngineeringPackage;

  @SpeakeasyMetadata({ data: "json, name=windowsApplication" })
  windowsApplication?: InventoryWindowsApplication;

  @SpeakeasyMetadata({ data: "json, name=wuaPackage" })
  wuaPackage?: InventoryWindowsUpdatePackage;

  @SpeakeasyMetadata({ data: "json, name=yumPackage" })
  yumPackage?: InventoryVersionedPackage;

  @SpeakeasyMetadata({ data: "json, name=zypperPackage" })
  zypperPackage?: InventoryVersionedPackage;

  @SpeakeasyMetadata({ data: "json, name=zypperPatch" })
  zypperPatch?: InventoryZypperPatch;
}
