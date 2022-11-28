import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PullBatchRequest
/** 
 * Request for the PullBatch method.
**/
export class PullBatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxEvents" })
  maxEvents?: number;

  @SpeakeasyMetadata({ data: "json, name=returnImmediately" })
  returnImmediately?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;
}
