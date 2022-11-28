import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Transaction information
**/
export declare class SandboxTransaction extends SpeakeasyBase {
    accountingBalance?: number;
    amount?: number;
    bookingDateTime?: Date;
    creditDebit?: string;
    currency?: string;
    description?: string;
    reference?: string;
    relatedAccount?: string;
    relatedName?: string;
    transactionCode?: string;
    valueDateTime?: Date;
}
