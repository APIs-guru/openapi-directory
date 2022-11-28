import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";



// WindowsApplication
/** 
 * Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
**/
export class WindowsApplication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=displayVersion" })
  displayVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=helpLink" })
  helpLink?: string;

  @SpeakeasyMetadata({ data: "json, name=installDate" })
  installDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;
}
