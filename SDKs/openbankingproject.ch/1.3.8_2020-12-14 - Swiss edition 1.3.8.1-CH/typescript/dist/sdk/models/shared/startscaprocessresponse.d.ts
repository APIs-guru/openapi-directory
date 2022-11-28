import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { AuthenticationObject } from "./authenticationobject";
import { ScaStatusEnum } from "./scastatusenum";
/**
 * Body of the JSON response for a Start SCA authorisation request.
**/
export declare class StartScaprocessResponse extends SpeakeasyBase {
    links: Map<string, HrefType>;
    authorisationId: string;
    challengeData?: ChallengeData;
    chosenScaMethod?: ChosenScaMethod;
    psuMessage?: string;
    scaMethods?: AuthenticationObject[];
    scaStatus: ScaStatusEnum;
}
