import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RunTransferJobRequest
/** 
 * Request passed to RunTransferJob.
**/
export class RunTransferJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;
}
