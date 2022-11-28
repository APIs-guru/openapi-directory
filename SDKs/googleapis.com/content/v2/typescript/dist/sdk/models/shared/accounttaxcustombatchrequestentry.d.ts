import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTax } from "./accounttax";
/**
 * A batch entry encoding a single non-batch accounttax request.
**/
export declare class AccounttaxCustomBatchRequestEntry extends SpeakeasyBase {
    accountId?: string;
    accountTax?: AccountTax;
    batchId?: number;
    merchantId?: string;
    method?: string;
}
