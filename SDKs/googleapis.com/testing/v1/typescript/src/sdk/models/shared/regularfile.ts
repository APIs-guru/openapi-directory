import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileReference } from "./filereference";


// RegularFile
/** 
 * A file or directory to install on the device before the test starts.
**/
export class RegularFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: FileReference;

  @Metadata({ data: "json, name=devicePath" })
  devicePath?: string;
}
