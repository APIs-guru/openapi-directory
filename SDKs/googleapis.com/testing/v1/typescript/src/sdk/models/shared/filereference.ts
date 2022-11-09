import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileReference
/** 
 * A reference to a file, used for user inputs.
**/
export class FileReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsPath" })
  gcsPath?: string;
}
