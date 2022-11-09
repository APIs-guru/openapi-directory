import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
**/
export declare class ObFundsConfirmation1DataInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
export declare class ObFundsConfirmation1Data extends SpeakeasyBase {
    consentId: string;
    instructedAmount: ObFundsConfirmation1DataInstructedAmount;
    reference: string;
}
export declare class ObFundsConfirmation1 extends SpeakeasyBase {
    data: ObFundsConfirmation1Data;
}
