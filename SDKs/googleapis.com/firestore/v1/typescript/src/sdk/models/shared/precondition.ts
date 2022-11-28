import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Precondition
/** 
 * A precondition on a document, used for conditional operations.
**/
export class Precondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exists" })
  exists?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
