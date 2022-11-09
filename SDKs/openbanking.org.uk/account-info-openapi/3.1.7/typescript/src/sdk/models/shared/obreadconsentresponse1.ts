import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Links } from "./links";
import { Meta } from "./meta";

export enum ObReadConsentResponse1DataPermissionsEnum {
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

export enum ObReadConsentResponse1DataStatusEnum {
    Authorised = "Authorised"
,    AwaitingAuthorisation = "AwaitingAuthorisation"
,    Rejected = "Rejected"
,    Revoked = "Revoked"
}


export class ObReadConsentResponse1Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @Metadata({ data: "json, name=Permissions" })
  permissions: ObReadConsentResponse1DataPermissionsEnum[];

  @Metadata({ data: "json, name=Status" })
  status: ObReadConsentResponse1DataStatusEnum;

  @Metadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;

  @Metadata({ data: "json, name=TransactionFromDateTime" })
  transactionFromDateTime?: Date;

  @Metadata({ data: "json, name=TransactionToDateTime" })
  transactionToDateTime?: Date;
}


export class ObReadConsentResponse1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObReadConsentResponse1Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;

  @Metadata({ data: "json, name=Risk" })
  risk: Map<string, any>;
}
