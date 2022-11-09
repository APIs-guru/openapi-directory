import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Links } from "./links";
import { Meta } from "./meta";


// ObFundsConfirmationConsentResponse1DataDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
**/
export class ObFundsConfirmationConsentResponse1DataDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}

export enum ObFundsConfirmationConsentResponse1DataStatusEnum {
    Authorised = "Authorised"
,    AwaitingAuthorisation = "AwaitingAuthorisation"
,    Rejected = "Rejected"
,    Revoked = "Revoked"
}


export class ObFundsConfirmationConsentResponse1Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount: ObFundsConfirmationConsentResponse1DataDebtorAccount;

  @Metadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status: ObFundsConfirmationConsentResponse1DataStatusEnum;

  @Metadata({ data: "json, name=StatusUpdateDateTime" })
  statusUpdateDateTime: Date;
}


export class ObFundsConfirmationConsentResponse1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObFundsConfirmationConsentResponse1Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
