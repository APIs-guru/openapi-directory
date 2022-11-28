import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObbFile } from "./obbfile";
import { RegularFile } from "./regularfile";



// DeviceFile
/** 
 * A single device file description.
**/
export class DeviceFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=obbFile" })
  obbFile?: ObbFile;

  @SpeakeasyMetadata({ data: "json, name=regularFile" })
  regularFile?: RegularFile;
}
