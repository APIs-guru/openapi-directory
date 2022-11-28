import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
**/
export declare class ObFundsConfirmationResponse1DataInstructedAmount extends SpeakeasyBase {
    amount: string;
    currency: string;
}
export declare class ObFundsConfirmationResponse1Data extends SpeakeasyBase {
    consentId: string;
    creationDateTime: Date;
    fundsAvailable: boolean;
    fundsConfirmationId: string;
    instructedAmount: ObFundsConfirmationResponse1DataInstructedAmount;
    reference: string;
}
export declare class ObFundsConfirmationResponse1 extends SpeakeasyBase {
    data: ObFundsConfirmationResponse1Data;
    links?: Links;
    meta?: Meta;
}
