import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
**/
export declare class ObFundsConfirmationConsent1DataDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
export declare class ObFundsConfirmationConsent1Data extends SpeakeasyBase {
    debtorAccount: ObFundsConfirmationConsent1DataDebtorAccount;
    expirationDateTime?: Date;
}
export declare class ObFundsConfirmationConsent1 extends SpeakeasyBase {
    data: ObFundsConfirmationConsent1Data;
}
