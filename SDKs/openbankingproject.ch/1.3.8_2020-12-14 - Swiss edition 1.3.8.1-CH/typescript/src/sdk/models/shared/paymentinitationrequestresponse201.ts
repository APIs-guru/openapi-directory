import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { Amount } from "./amount";
import { AuthenticationObject } from "./authenticationobject";
import { TppMessage2Xx } from "./tppmessage2xx";
import { TransactionStatusEnum } from "./transactionstatusenum";



// PaymentInitationRequestResponse201
/** 
 * Body of the response for a successful payment initiation request.
**/
export class PaymentInitationRequestResponse201 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=challengeData" })
  challengeData?: ChallengeData;

  @SpeakeasyMetadata({ data: "json, name=chosenScaMethod" })
  chosenScaMethod?: ChosenScaMethod;

  @SpeakeasyMetadata({ data: "json, name=currencyConversionFee" })
  currencyConversionFee?: Amount;

  @SpeakeasyMetadata({ data: "json, name=estimatedInterbankSettlementAmount" })
  estimatedInterbankSettlementAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=estimatedTotalAmount" })
  estimatedTotalAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=paymentId" })
  paymentId: string;

  @SpeakeasyMetadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=scaMethods", elemType: AuthenticationObject })
  scaMethods?: AuthenticationObject[];

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage2Xx })
  tppMessages?: TppMessage2Xx[];

  @SpeakeasyMetadata({ data: "json, name=transactionFeeIndicator" })
  transactionFeeIndicator?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transactionFees" })
  transactionFees?: Amount;

  @SpeakeasyMetadata({ data: "json, name=transactionStatus" })
  transactionStatus: TransactionStatusEnum;
}
