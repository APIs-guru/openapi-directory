import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { ConsentStatusEnum } from "./consentstatusenum";
import { AuthenticationObject } from "./authenticationobject";
/**
 * Body of the JSON response for a successful consent request.
**/
export declare class ConsentsResponse201 extends SpeakeasyBase {
    links: Map<string, HrefType>;
    challengeData?: ChallengeData;
    chosenScaMethod?: ChosenScaMethod;
    consentId: string;
    consentStatus: ConsentStatusEnum;
    psuMessage?: string;
    scaMethods?: AuthenticationObject[];
}
