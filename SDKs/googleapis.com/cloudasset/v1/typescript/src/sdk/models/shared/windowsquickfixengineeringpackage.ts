import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WindowsQuickFixEngineeringPackage
/** 
 * Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering
**/
export class WindowsQuickFixEngineeringPackage extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=hotFixId" })
  hotFixId?: string;

  @Metadata({ data: "json, name=installTime" })
  installTime?: string;
}
