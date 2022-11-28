import { SpeakeasyBase } from "../../../internal/utils";
import { QuotaOperation } from "./quotaoperation";
/**
 * Request message for the AllocateQuota method.
**/
export declare class AllocateQuotaRequest extends SpeakeasyBase {
    allocateOperation?: QuotaOperation;
    serviceConfigId?: string;
}
