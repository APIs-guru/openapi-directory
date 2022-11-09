import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Precondition
/** 
 * A precondition on a document, used for conditional operations.
**/
export class Precondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=exists" })
  exists?: boolean;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
