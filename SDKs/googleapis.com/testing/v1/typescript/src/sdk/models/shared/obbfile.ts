import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FileReference } from "./filereference";


// ObbFile
/** 
 * An opaque binary blob file to install on the device before the test starts.
**/
export class ObbFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=obb" })
  obb?: FileReference;

  @Metadata({ data: "json, name=obbFileName" })
  obbFileName?: string;
}
