import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileLocation
/** 
 * Indicates the location at which a package was found.
**/
export class FileLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filePath" })
  filePath?: string;
}
