import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransferJob } from "./transferjob";


// UpdateTransferJobRequest
/** 
 * Request passed to UpdateTransferJob.
**/
export class UpdateTransferJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=transferJob" })
  transferJob?: TransferJob;

  @Metadata({ data: "json, name=updateTransferJobFieldMask" })
  updateTransferJobFieldMask?: string;
}
