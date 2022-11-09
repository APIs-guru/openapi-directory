import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";


// InventoryWindowsApplication
/** 
 * Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key
**/
export class InventoryWindowsApplication extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=displayVersion" })
  displayVersion?: string;

  @Metadata({ data: "json, name=helpLink" })
  helpLink?: string;

  @Metadata({ data: "json, name=installDate" })
  installDate?: Date;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;
}
