import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PullBatchRequest
/** 
 * Request for the PullBatch method.
**/
export class PullBatchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxEvents" })
  maxEvents?: number;

  @Metadata({ data: "json, name=returnImmediately" })
  returnImmediately?: boolean;

  @Metadata({ data: "json, name=subscription" })
  subscription?: string;
}
