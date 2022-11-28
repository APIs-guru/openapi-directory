import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileReference
/** 
 * A reference to a file.
**/
export class FileReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileUri" })
  fileUri?: string;
}
