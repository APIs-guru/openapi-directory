import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinksSigningBasket } from "./linkssigningbasket";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { AuthenticationObject } from "./authenticationobject";
import { TppMessage2Xx } from "./tppmessage2xx";
import { TransactionStatusSbsEnum } from "./transactionstatussbsenum";



// SigningBasketResponse201
/** 
 * Body of the JSON response for a successful create signing basket request.
**/
export class SigningBasketResponse201 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: LinksSigningBasket;

  @SpeakeasyMetadata({ data: "json, name=basketId" })
  basketId: string;

  @SpeakeasyMetadata({ data: "json, name=challengeData" })
  challengeData?: ChallengeData;

  @SpeakeasyMetadata({ data: "json, name=chosenScaMethod" })
  chosenScaMethod?: ChosenScaMethod;

  @SpeakeasyMetadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=scaMethods", elemType: AuthenticationObject })
  scaMethods?: AuthenticationObject[];

  @SpeakeasyMetadata({ data: "json, name=tppMessages", elemType: TppMessage2Xx })
  tppMessages?: TppMessage2Xx[];

  @SpeakeasyMetadata({ data: "json, name=transactionStatus" })
  transactionStatus: TransactionStatusSbsEnum;
}
