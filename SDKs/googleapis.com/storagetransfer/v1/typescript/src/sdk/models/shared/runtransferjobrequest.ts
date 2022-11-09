import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RunTransferJobRequest
/** 
 * Request passed to RunTransferJob.
**/
export class RunTransferJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectId" })
  projectId?: string;
}
