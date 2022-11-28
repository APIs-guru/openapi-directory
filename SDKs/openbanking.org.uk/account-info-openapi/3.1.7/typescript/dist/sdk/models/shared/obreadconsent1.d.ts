import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ObReadConsent1DataPermissionsEnum {
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
export declare class ObReadConsent1Data extends SpeakeasyBase {
    expirationDateTime?: Date;
    permissions: ObReadConsent1DataPermissionsEnum[];
    transactionFromDateTime?: Date;
    transactionToDateTime?: Date;
}
export declare class ObReadConsent1 extends SpeakeasyBase {
    data: ObReadConsent1Data;
    risk: Map<string, any>;
}
