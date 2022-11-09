import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MoveImpact
/** 
 * A message to group impacts of moving the target resource.
**/
export class MoveImpact extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;
}
