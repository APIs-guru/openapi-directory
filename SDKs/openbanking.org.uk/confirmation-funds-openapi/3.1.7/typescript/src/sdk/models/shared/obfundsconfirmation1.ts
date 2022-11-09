import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ObFundsConfirmation1DataInstructedAmount
/** 
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
**/
export class ObFundsConfirmation1DataInstructedAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


export class ObFundsConfirmation1Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObFundsConfirmation1DataInstructedAmount;

  @Metadata({ data: "json, name=Reference" })
  reference: string;
}


export class ObFundsConfirmation1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObFundsConfirmation1Data;
}
