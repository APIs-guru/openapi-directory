import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObFundsConfirmationConsent1DataDebtorAccount
/** 
 * Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
**/
export class ObFundsConfirmationConsent1DataDebtorAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;

  @SpeakeasyMetadata({ data: "json, name=SecondaryIdentification" })
  secondaryIdentification?: string;
}


export class ObFundsConfirmationConsent1Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DebtorAccount" })
  debtorAccount: ObFundsConfirmationConsent1DataDebtorAccount;

  @SpeakeasyMetadata({ data: "json, name=ExpirationDateTime" })
  expirationDateTime?: Date;
}


export class ObFundsConfirmationConsent1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObFundsConfirmationConsent1Data;
}
