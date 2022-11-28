import { SpeakeasyBase } from "../../../internal/utils";
/**
 * General account information
**/
export declare class SandboxBankAccountInfo extends SpeakeasyBase {
    accountSubType: string;
    accountType: string;
    alias?: string;
    availableBalance?: number;
    currency: string;
    description?: string;
    iban: string;
    ledgerBalance?: number;
    openingDate?: Date;
    overdraftLimit?: number;
}
