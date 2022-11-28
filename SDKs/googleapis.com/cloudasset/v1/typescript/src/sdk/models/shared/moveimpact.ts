import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MoveImpact
/** 
 * A message to group impacts of moving the target resource.
**/
export class MoveImpact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;
}
