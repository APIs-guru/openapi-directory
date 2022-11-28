import { SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";
export declare enum ObReadConsentResponse1DataPermissionsEnum {
    ReadAccountsBasic = "ReadAccountsBasic",
    ReadAccountsDetail = "ReadAccountsDetail",
    ReadBalances = "ReadBalances",
    ReadBeneficiariesBasic = "ReadBeneficiariesBasic",
    ReadBeneficiariesDetail = "ReadBeneficiariesDetail",
    ReadDirectDebits = "ReadDirectDebits",
    ReadOffers = "ReadOffers",
    ReadPan = "ReadPAN",
    ReadParty = "ReadParty",
    ReadPartyPsu = "ReadPartyPSU",
    ReadProducts = "ReadProducts",
    ReadScheduledPaymentsBasic = "ReadScheduledPaymentsBasic",
    ReadScheduledPaymentsDetail = "ReadScheduledPaymentsDetail",
    ReadStandingOrdersBasic = "ReadStandingOrdersBasic",
    ReadStandingOrdersDetail = "ReadStandingOrdersDetail",
    ReadStatementsBasic = "ReadStatementsBasic",
    ReadStatementsDetail = "ReadStatementsDetail",
    ReadTransactionsBasic = "ReadTransactionsBasic",
    ReadTransactionsCredits = "ReadTransactionsCredits",
    ReadTransactionsDebits = "ReadTransactionsDebits",
    ReadTransactionsDetail = "ReadTransactionsDetail"
}
export declare enum ObReadConsentResponse1DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Rejected = "Rejected",
    Revoked = "Revoked"
}
export declare class ObReadConsentResponse1Data extends SpeakeasyBase {
    consentId: string;
    creationDateTime: Date;
    expirationDateTime?: Date;
    permissions: ObReadConsentResponse1DataPermissionsEnum[];
    status: ObReadConsentResponse1DataStatusEnum;
    statusUpdateDateTime: Date;
    transactionFromDateTime?: Date;
    transactionToDateTime?: Date;
}
export declare class ObReadConsentResponse1 extends SpeakeasyBase {
    data: ObReadConsentResponse1Data;
    links?: Links;
    meta?: Meta;
    risk: Map<string, any>;
}
