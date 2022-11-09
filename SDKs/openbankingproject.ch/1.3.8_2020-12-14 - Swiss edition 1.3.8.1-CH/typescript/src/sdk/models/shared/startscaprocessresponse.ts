import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HrefType } from "./hreftype";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { AuthenticationObject } from "./authenticationobject";
import { ScaStatusEnum } from "./scastatusenum";


// StartScaprocessResponse
/** 
 * Body of the JSON response for a Start SCA authorisation request.
**/
export class StartScaprocessResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links", elemType: shared.HrefType })
  links: Map<string, HrefType>;

  @Metadata({ data: "json, name=authorisationId" })
  authorisationId: string;

  @Metadata({ data: "json, name=challengeData" })
  challengeData?: ChallengeData;

  @Metadata({ data: "json, name=chosenScaMethod" })
  chosenScaMethod?: ChosenScaMethod;

  @Metadata({ data: "json, name=psuMessage" })
  psuMessage?: string;

  @Metadata({ data: "json, name=scaMethods", elemType: shared.AuthenticationObject })
  scaMethods?: AuthenticationObject[];

  @Metadata({ data: "json, name=scaStatus" })
  scaStatus: ScaStatusEnum;
}
