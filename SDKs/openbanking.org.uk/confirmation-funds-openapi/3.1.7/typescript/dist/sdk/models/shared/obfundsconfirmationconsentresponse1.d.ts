import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
**/
export declare class ObFundsConfirmationConsentResponse1DataDebtorAccount extends SpeakeasyBase {
    identification: string;
    name?: string;
    schemeName: string;
    secondaryIdentification?: string;
}
export declare enum ObFundsConfirmationConsentResponse1DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Rejected = "Rejected",
    Revoked = "Revoked"
}
export declare class ObFundsConfirmationConsentResponse1Data extends SpeakeasyBase {
    consentId: string;
    creationDateTime: Date;
    debtorAccount: ObFundsConfirmationConsentResponse1DataDebtorAccount;
    expirationDateTime?: Date;
    status: ObFundsConfirmationConsentResponse1DataStatusEnum;
    statusUpdateDateTime: Date;
}
export declare class ObFundsConfirmationConsentResponse1 extends SpeakeasyBase {
    data: ObFundsConfirmationConsentResponse1Data;
    links?: Links;
    meta?: Meta;
}
