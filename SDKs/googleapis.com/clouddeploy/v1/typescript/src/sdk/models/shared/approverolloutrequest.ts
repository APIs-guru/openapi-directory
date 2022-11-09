import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApproveRolloutRequest
/** 
 * The request object used by `ApproveRollout`.
**/
export class ApproveRolloutRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=approved" })
  approved?: boolean;
}
