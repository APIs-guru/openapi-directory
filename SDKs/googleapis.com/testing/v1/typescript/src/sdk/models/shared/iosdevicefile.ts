import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileReference } from "./filereference";


// IosDeviceFile
/** 
 * A file or directory to install on the device before the test starts.
**/
export class IosDeviceFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @Metadata({ data: "json, name=content" })
  content?: FileReference;

  @Metadata({ data: "json, name=devicePath" })
  devicePath?: string;
}
