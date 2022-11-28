import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApproveRolloutRequest
/** 
 * The request object used by `ApproveRollout`.
**/
export class ApproveRolloutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approved" })
  approved?: boolean;
}
