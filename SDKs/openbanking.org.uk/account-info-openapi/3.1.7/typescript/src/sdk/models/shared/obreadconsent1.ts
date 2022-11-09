import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ObReadConsent1DataPermissionsEnum {
    ReadAccountsBasic = "ReadAccountsBasic"
,    ReadAccountsDetail = "ReadAccountsDetail"
,    ReadBalances = "ReadBalances"
,    ReadBeneficiariesBasic = "ReadBeneficiariesBasic"
,    ReadBeneficiariesDetail = "ReadBeneficiariesDetail"
,    ReadDirectDebits = "ReadDirectDebits"
,    ReadOffers = "ReadOffers"
,    ReadPan = "ReadPAN"
,    ReadParty = "ReadParty"
,    ReadPartyPsu = "ReadPartyPSU"
,    ReadProducts = "ReadProducts"
,    ReadScheduledPaymentsBasic = "ReadScheduledPaymentsBasic"
,    ReadScheduledPaymentsDetail = "ReadScheduledPaymentsDetail"
,    ReadStandingOrdersBasic = "ReadStandingOrdersBasic"
,    ReadStandingOrdersDetail = "ReadStandingOrdersDetail"
,    ReadStatementsBasic = "ReadStatementsBasic"
,    ReadStatementsDetail = "ReadStatementsDetail"
,    ReadTransactionsBasic = "ReadTransactionsBasic"
,    ReadTransactionsCredits = "ReadTransactionsCredits"
,    ReadTransactionsDebits = "ReadTransactionsDebits"
,    ReadTransactionsDetail = "ReadTransactionsDetail"
}


export class ObReadConsent1Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @Metadata({ data: "json, name=Permissions" })
  permissions: ObReadConsent1DataPermissionsEnum[];

  @Metadata({ data: "json, name=TransactionFromDateTime" })
  transactionFromDateTime?: Date;

  @Metadata({ data: "json, name=TransactionToDateTime" })
  transactionToDateTime?: Date;
}


export class ObReadConsent1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadConsent1Data;

  @Metadata({ data: "json, name=Risk" })
  risk: Map<string, any>;
}
