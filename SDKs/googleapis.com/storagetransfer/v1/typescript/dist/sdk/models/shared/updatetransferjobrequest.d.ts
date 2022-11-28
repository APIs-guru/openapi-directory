import { SpeakeasyBase } from "../../../internal/utils";
import { TransferJobInput } from "./transferjob";
/**
 * Request passed to UpdateTransferJob.
**/
export declare class UpdateTransferJobRequestInput extends SpeakeasyBase {
    projectId?: string;
    transferJob?: TransferJobInput;
    updateTransferJobFieldMask?: string;
}
