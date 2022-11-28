import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { Amount } from "./amount";
import { ScaStatusEnum } from "./scastatusenum";
/**
 * Body of the JSON response for a successful select PSU authentication method request.
**/
export declare class SelectPsuAuthenticationMethodResponse extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    challengeData?: ChallengeData;
    chosenScaMethod?: ChosenScaMethod;
    currencyConversionFees?: Amount;
    estimatedInterbankSettlementAmount?: Amount;
    estimatedTotalAmount?: Amount;
    psuMessage?: string;
    scaStatus: ScaStatusEnum;
    transactionFees?: Amount;
}
