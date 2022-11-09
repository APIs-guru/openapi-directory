import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileLocation
/** 
 * Indicates the location at which a package was found.
**/
export class FileLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=filePath" })
  filePath?: string;
}
