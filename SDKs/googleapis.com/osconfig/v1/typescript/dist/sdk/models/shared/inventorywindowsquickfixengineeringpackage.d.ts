import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
**/
export declare class InventoryWindowsQuickFixEngineeringPackage extends SpeakeasyBase {
    caption?: string;
    description?: string;
    hotFixId?: string;
    installTime?: string;
}
