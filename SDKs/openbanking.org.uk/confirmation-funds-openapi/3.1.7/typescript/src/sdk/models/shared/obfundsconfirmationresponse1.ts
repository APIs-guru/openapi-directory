import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Links } from "./links";
import { Meta } from "./meta";


// ObFundsConfirmationResponse1DataInstructedAmount
/** 
 * Amount of money to be confirmed as available funds in the debtor account. Contains an Amount and a Currency.
**/
export class ObFundsConfirmationResponse1DataInstructedAmount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Amount" })
  amount: string;

  @Metadata({ data: "json, name=Currency" })
  currency: string;
}


export class ObFundsConfirmationResponse1Data extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsentId" })
  consentId: string;

  @Metadata({ data: "json, name=CreationDateTime" })
  creationDateTime: Date;

  @Metadata({ data: "json, name=FundsAvailable" })
  fundsAvailable: boolean;

  @Metadata({ data: "json, name=FundsConfirmationId" })
  fundsConfirmationId: string;

  @Metadata({ data: "json, name=InstructedAmount" })
  instructedAmount: ObFundsConfirmationResponse1DataInstructedAmount;

  @Metadata({ data: "json, name=Reference" })
  reference: string;
}


export class ObFundsConfirmationResponse1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Data" })
  data: ObFundsConfirmationResponse1Data;

  @Metadata({ data: "json, name=Links" })
  links?: Links;

  @Metadata({ data: "json, name=Meta" })
  meta?: Meta;
}
