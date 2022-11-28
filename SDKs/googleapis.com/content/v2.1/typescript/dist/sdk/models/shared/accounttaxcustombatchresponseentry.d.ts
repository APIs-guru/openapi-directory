import { SpeakeasyBase } from "../../../internal/utils";
import { AccountTax } from "./accounttax";
import { Errors } from "./errors";
/**
 * A batch entry encoding a single non-batch accounttax response.
**/
export declare class AccounttaxCustomBatchResponseEntry extends SpeakeasyBase {
    accountTax?: AccountTax;
    batchId?: number;
    errors?: Errors;
    kind?: string;
}
