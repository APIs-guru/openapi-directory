import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=_links" })
  links: LinksSigningBasket;

  @Metadata({ data: "json, name=basketId" })
  basketId: string;

  @Metadata({ data: "json, name=challengeData" })
  challengeData?: ChallengeData;

  @Metadata({ data: "json, name=chosenScaMethod" })
  chosenScaMethod?: ChosenScaMethod;

  @Metadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @Metadata({ data: "json, name=scaMethods", elemType: shared.AuthenticationObject })
  scaMethods?: AuthenticationObject[];

  @Metadata({ data: "json, name=tppMessages", elemType: shared.TppMessage2Xx })
  tppMessages?: TppMessage2Xx[];

  @Metadata({ data: "json, name=transactionStatus" })
  transactionStatus: TransactionStatusSbsEnum;
}
