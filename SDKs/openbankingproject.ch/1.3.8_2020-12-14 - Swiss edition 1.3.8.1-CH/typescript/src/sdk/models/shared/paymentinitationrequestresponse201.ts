import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { AuthenticationObject } from "./authenticationobject";
import { TppMessage2Xx } from "./tppmessage2xx";
import { Amount } from "./amount";
import { TransactionStatusEnum } from "./transactionstatusenum";


// PaymentInitationRequestResponse201
/** 
 * Body of the response for a successful payment initiation request.
**/
export class PaymentInitationRequestResponse201 extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links: Map<string, HrefType>;

  @Metadata({ data: "json, name=challengeData" })
  challengeData?: ChallengeData;

  @Metadata({ data: "json, name=chosenScaMethod" })
  chosenScaMethod?: ChosenScaMethod;

  @Metadata({ data: "json, name=currencyConversionFee" })
  currencyConversionFee?: Amount;

  @Metadata({ data: "json, name=estimatedInterbankSettlementAmount" })
  estimatedInterbankSettlementAmount?: Amount;

  @Metadata({ data: "json, name=estimatedTotalAmount" })
  estimatedTotalAmount?: Amount;

  @Metadata({ data: "json, name=paymentId" })
  paymentId: string;

  @Metadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @Metadata({ data: "json, name=scaMethods", elemType: shared.AuthenticationObject })
  scaMethods?: AuthenticationObject[];

  @Metadata({ data: "json, name=tppMessages", elemType: shared.TppMessage2Xx })
  tppMessages?: TppMessage2Xx[];

  @Metadata({ data: "json, name=transactionFeeIndicator" })
  transactionFeeIndicator?: boolean;

  @Metadata({ data: "json, name=transactionFees" })
  transactionFees?: Amount;

  @Metadata({ data: "json, name=transactionStatus" })
  transactionStatus: TransactionStatusEnum;
}
