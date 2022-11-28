import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { Amount } from "./amount";
import { AuthenticationObject } from "./authenticationobject";
import { ScaStatusEnum } from "./scastatusenum";
/**
 * Body of the JSON response for a successful update PSU authentication request.
**/
export declare class UpdatePsuAuthenticationResponse extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    authorisationId?: string;
    challengeData?: ChallengeData;
    chosenScaMethod?: ChosenScaMethod;
    currencyConversionFees?: Amount;
    estimatedInterbankSettlementAmount?: Amount;
    estimatedTotalAmount?: Amount;
    psuMessage?: string;
    scaMethods?: AuthenticationObject[];
    scaStatus: ScaStatusEnum;
    transactionFees?: Amount;
}
