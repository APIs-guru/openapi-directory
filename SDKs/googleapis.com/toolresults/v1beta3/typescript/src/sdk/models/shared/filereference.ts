import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileReference
/** 
 * A reference to a file.
**/
export class FileReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileUri" })
  fileUri?: string;
}
