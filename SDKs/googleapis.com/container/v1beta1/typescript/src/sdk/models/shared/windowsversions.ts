import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WindowsVersion } from "./windowsversion";


// WindowsVersions
/** 
 * Windows server versions.
**/
export class WindowsVersions extends SpeakeasyBase {
  @Metadata({ data: "json, name=windowsVersions", elemType: shared.WindowsVersion })
  windowsVersions?: WindowsVersion[];
}
