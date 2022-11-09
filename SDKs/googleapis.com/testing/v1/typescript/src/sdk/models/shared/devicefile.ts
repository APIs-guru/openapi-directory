import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObbFile } from "./obbfile";
import { RegularFile } from "./regularfile";


// DeviceFile
/** 
 * A single device file description.
**/
export class DeviceFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=obbFile" })
  obbFile?: ObbFile;

  @Metadata({ data: "json, name=regularFile" })
  regularFile?: RegularFile;
}
