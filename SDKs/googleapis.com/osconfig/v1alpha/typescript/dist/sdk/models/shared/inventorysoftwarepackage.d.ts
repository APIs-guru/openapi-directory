import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryVersionedPackage } from "./inventoryversionedpackage";
import { InventoryWindowsQuickFixEngineeringPackage } from "./inventorywindowsquickfixengineeringpackage";
import { InventoryWindowsApplication } from "./inventorywindowsapplication";
import { InventoryWindowsUpdatePackage } from "./inventorywindowsupdatepackage";
import { InventoryZypperPatch } from "./inventoryzypperpatch";
/**
 * Software package information of the operating system.
**/
export declare class InventorySoftwarePackage extends SpeakeasyBase {
    aptPackage?: InventoryVersionedPackage;
    cosPackage?: InventoryVersionedPackage;
    googetPackage?: InventoryVersionedPackage;
    qfePackage?: InventoryWindowsQuickFixEngineeringPackage;
    windowsApplication?: InventoryWindowsApplication;
    wuaPackage?: InventoryWindowsUpdatePackage;
    yumPackage?: InventoryVersionedPackage;
    zypperPackage?: InventoryVersionedPackage;
    zypperPatch?: InventoryZypperPatch;
}
