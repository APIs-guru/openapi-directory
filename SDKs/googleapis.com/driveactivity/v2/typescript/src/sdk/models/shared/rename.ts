import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Rename
/** 
 * An object was renamed.
**/
export class Rename extends SpeakeasyBase {
  @Metadata({ data: "json, name=newTitle" })
  newTitle?: string;

  @Metadata({ data: "json, name=oldTitle" })
  oldTitle?: string;
}
