import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";



// RegularFile
/** 
 * A file or directory to install on the device before the test starts.
**/
export class RegularFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=devicePath" })
  devicePath?: string;
}
