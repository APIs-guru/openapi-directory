import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FileReference
/** 
 * A reference to a file, used for user inputs.
**/
export class FileReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsPath" })
  gcsPath?: string;
}
