import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RetryJobRequest
/** 
 * RetryJobRequest is the request object used by `RetryJob`.
**/
export class RetryJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobId" })
  jobId?: string;

  @Metadata({ data: "json, name=phaseId" })
  phaseId?: string;
}
