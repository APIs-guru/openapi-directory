import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PullResponse } from "./pullresponse";



// PullBatchResponse
/** 
 * Response for the PullBatch method.
**/
export class PullBatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pullResponses", elemType: PullResponse })
  pullResponses?: PullResponse[];
}
