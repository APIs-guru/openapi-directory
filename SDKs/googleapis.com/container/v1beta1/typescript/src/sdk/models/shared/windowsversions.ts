import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WindowsVersion } from "./windowsversion";



// WindowsVersions
/** 
 * Windows server versions.
**/
export class WindowsVersions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=windowsVersions", elemType: WindowsVersion })
  windowsVersions?: WindowsVersion[];
}
