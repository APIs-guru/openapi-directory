import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SasPortalMoveNodeRequest
/** 
 * Request for MoveNode.
**/
export class SasPortalMoveNodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination?: string;
}
