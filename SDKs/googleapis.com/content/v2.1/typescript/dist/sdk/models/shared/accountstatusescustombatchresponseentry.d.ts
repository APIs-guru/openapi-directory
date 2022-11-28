import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatus } from "./accountstatus";
import { Errors } from "./errors";
/**
 * A batch entry encoding a single non-batch accountstatuses response.
**/
export declare class AccountstatusesCustomBatchResponseEntry extends SpeakeasyBase {
    accountStatus?: AccountStatus;
    batchId?: number;
    errors?: Errors;
}
