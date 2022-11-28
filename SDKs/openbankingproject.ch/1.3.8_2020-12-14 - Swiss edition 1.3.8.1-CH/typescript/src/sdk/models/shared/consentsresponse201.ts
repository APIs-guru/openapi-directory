import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { ConsentStatusEnum } from "./consentstatusenum";
import { AuthenticationObject } from "./authenticationobject";



// ConsentsResponse201
/** 
 * Body of the JSON response for a successful consent request.
**/
export class ConsentsResponse201 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links", elemType: HrefType })
  links: Map<string, HrefType>;

  @SpeakeasyMetadata({ data: "json, name=challengeData" })
  challengeData?: ChallengeData;

  @SpeakeasyMetadata({ data: "json, name=chosenScaMethod" })
  chosenScaMethod?: ChosenScaMethod;

  @SpeakeasyMetadata({ data: "json, name=consentId" })
  consentId: string;

  @SpeakeasyMetadata({ data: "json, name=consentStatus" })
  consentStatus: ConsentStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=scaMethods", elemType: AuthenticationObject })
  scaMethods?: AuthenticationObject[];
}
