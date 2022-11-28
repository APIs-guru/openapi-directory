import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";



// ObbFile
/** 
 * An opaque binary blob file to install on the device before the test starts.
**/
export class ObbFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=obb" })
  obb?: FileReference;

  @SpeakeasyMetadata({ data: "json, name=obbFileName" })
  obbFileName?: string;
}
