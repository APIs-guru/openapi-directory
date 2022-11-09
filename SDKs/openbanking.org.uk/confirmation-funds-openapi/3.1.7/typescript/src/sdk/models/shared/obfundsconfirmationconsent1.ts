import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObFundsConfirmationConsent1DataDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
**/
export class ObFundsConfirmationConsent1DataDebtorAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Identification" })
  identification: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @Metadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


export class ObFundsConfirmationConsent1Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=DebtorAccount" })
  debtorAccount: ObFundsConfirmationConsent1DataDebtorAccount;

  @Metadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;
}


export class ObFundsConfirmationConsent1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObFundsConfirmationConsent1Data;
}
