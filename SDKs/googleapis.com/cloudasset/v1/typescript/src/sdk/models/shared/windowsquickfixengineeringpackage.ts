import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WindowsQuickFixEngineeringPackage
/** 
 * Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
**/
export class WindowsQuickFixEngineeringPackage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=hotFixId" })
  hotFixId?: string;

  @SpeakeasyMetadata({ data: "json, name=installTime" })
  installTime?: string;
}
