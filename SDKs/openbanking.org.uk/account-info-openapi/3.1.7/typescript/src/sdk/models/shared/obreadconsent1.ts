import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ObReadConsent1DataPermissionsEnum {
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


export class ObReadConsent1Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Permissions" })
  permissions: ObReadConsent1DataPermissionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=TransactionFromDateTime" })
  transactionFromDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransactionToDateTime" })
  transactionToDateTime?: Date;
}


export class ObReadConsent1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadConsent1Data;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: Map<string, any>;
}
