import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SasPortalMoveNodeRequest
/** 
 * Request for MoveNode.
**/
export class SasPortalMoveNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;
}
