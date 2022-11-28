import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";



// ObFundsConfirmationConsentResponse1DataDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
**/
export class ObFundsConfirmationConsentResponse1DataDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}

export enum ObFundsConfirmationConsentResponse1DataStatusEnum {
    Authorised = "Authorised",
    AwaitingAuthorisation = "AwaitingAuthorisation",
    Rejected = "Rejected",
    Revoked = "Revoked"
}


export class ObFundsConfirmationConsentResponse1Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount: ObFundsConfirmationConsentResponse1DataDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: ObFundsConfirmationConsentResponse1DataStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObFundsConfirmationConsentResponse1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObFundsConfirmationConsentResponse1Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
