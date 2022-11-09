import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PullResponse } from "./pullresponse";


// PullBatchResponse
/** 
 * Response for the PullBatch method.
**/
export class PullBatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=pullResponses", elemType: shared.PullResponse })
  pullResponses?: PullResponse[];
}
