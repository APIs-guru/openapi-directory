import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";


export enum ObReadConsentResponse1DataPermissionsEnum {
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

export enum ObReadConsentResponse1DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Rejected = "Rejected",
    Revoked = "Revoked"
}


export class ObReadConsentResponse1Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Permissions" })
  permissions: ObReadConsentResponse1DataPermissionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObReadConsentResponse1DataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=TransactionFromDateTime" })
  transactionFromDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=TransactionToDateTime" })
  transactionToDateTime?: Date;
}


export class ObReadConsentResponse1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObReadConsentResponse1Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;

  @SpeakeasyMetadata({ data: "json, name=Risk" })
  risk: Map<string, any>;
}
