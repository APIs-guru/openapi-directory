import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";



// IosDeviceFile
/** 
 * A file or directory to install on the device before the test starts.
**/
export class IosDeviceFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=devicePath" })
  devicePath?: string;
}
