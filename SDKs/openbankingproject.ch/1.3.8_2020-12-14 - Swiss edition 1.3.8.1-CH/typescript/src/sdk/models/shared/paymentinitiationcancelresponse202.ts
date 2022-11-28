import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { AuthenticationObject } from "./authenticationobject";
import { TransactionStatusEnum } from "./transactionstatusenum";



// PaymentInitiationCancelResponse202
/** 
 * Body of the response for a successful cancel payment request.
**/
export class PaymentInitiationCancelResponse202 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links?: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=challengeData" })
  challengeData?: ChallengeData;

  @SpeakeasyMetadata({ data: "json, name=chosenScaMethod" })
  chosenScaMethod?: ChosenScaMethod;

  @SpeakeasyMetadata({ data: "json, name=scaMethods", elemType: AuthenticationObject })
  scaMethods?: AuthenticationObject[];

  @SpeakeasyMetadata({ data: "json, name=transactionStatus" })
  transactionStatus: TransactionStatusEnum;
}
