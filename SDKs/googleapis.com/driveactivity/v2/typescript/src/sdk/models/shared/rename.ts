import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Rename
/** 
 * An object was renamed.
**/
export class Rename extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newTitle" })
  newTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=oldTitle" })
  oldTitle?: string;
}
