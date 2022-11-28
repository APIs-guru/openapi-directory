import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ObFundsConfirmation1DataInstructedAmount
/** 
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
**/
export class ObFundsConfirmation1DataInstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


export class ObFundsConfirmation1Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObFundsConfirmation1DataInstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference: string;
}


export class ObFundsConfirmation1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObFundsConfirmation1Data;
}
