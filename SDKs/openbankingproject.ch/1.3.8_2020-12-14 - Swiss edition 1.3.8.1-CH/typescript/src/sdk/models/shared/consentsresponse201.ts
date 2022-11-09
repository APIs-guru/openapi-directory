import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links: Map<string, HrefType>;

  @Metadata({ data: "json, name=challengeData" })
  challengeData?: ChallengeData;

  @Metadata({ data: "json, name=chosenScaMethod" })
  chosenScaMethod?: ChosenScaMethod;

  @Metadata({ data: "json, name=consentId" })
  consentId: string;

  @Metadata({ data: "json, name=consentStatus" })
  consentStatus: ConsentStatusEnum;

  @Metadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @Metadata({ data: "json, name=scaMethods", elemType: shared.AuthenticationObject })
  scaMethods?: AuthenticationObject[];
}
