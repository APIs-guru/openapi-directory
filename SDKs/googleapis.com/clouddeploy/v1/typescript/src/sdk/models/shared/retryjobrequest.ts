import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RetryJobRequest
/** 
 * RetryJobRequest is the request object used by `RetryJob`.
**/
export class RetryJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=phaseId" })
  phaseId?: string;
}
