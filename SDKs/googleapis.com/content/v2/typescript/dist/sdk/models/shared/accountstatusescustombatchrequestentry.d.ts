import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A batch entry encoding a single non-batch accountstatuses request.
**/
export declare class AccountstatusesCustomBatchRequestEntry extends SpeakeasyBase {
    accountId?: string;
    batchId?: number;
    destinations?: string[];
    merchantId?: string;
    method?: string;
}
