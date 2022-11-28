import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Links } from "./links";
import { Meta } from "./meta";



// ObFundsConfirmationResponse1DataInstructedAmount
/** 
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
**/
export class ObFundsConfirmationResponse1DataInstructedAmount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=Currency" })
  currency: string;
}


export class ObFundsConfirmationResponse1Data extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=FundsAvailable" })
  fundsAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=FundsConfirmationId" })
  fundsConfirmationId: string;

  @SpeakeasyMetadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObFundsConfirmationResponse1DataInstructedAmount;

  @SpeakeasyMetadata({ data: "json, name=Reference" })
  reference: string;
}


export class ObFundsConfirmationResponse1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Data" })
  data: ObFundsConfirmationResponse1Data;

  @SpeakeasyMetadata({ data: "json, name=Links" })
  links?: Links;

  @SpeakeasyMetadata({ data: "json, name=Meta" })
  meta?: Meta;
}
