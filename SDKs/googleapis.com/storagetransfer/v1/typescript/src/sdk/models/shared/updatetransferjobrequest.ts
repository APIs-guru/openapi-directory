import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransferJobInput } from "./transferjob";



// UpdateTransferJobRequestInput
/** 
 * Request passed to UpdateTransferJob.
**/
export class UpdateTransferJobRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=transferJob" })
  transferJob?: TransferJobInput;

  @SpeakeasyMetadata({ data: "json, name=updateTransferJobFieldMask" })
  updateTransferJobFieldMask?: string;
}
