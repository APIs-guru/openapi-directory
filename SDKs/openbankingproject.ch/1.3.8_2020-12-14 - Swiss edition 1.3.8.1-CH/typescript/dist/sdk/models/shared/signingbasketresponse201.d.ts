import { SpeakeasyBase } from "../../../internal/utils";
import { LinksSigningBasket } from "./linkssigningbasket";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { AuthenticationObject } from "./authenticationobject";
import { TppMessage2Xx } from "./tppmessage2xx";
import { TransactionStatusSbsEnum } from "./transactionstatussbsenum";
/**
 * Body of the JSON response for a successful create signing basket request.
**/
export declare class SigningBasketResponse201 extends SpeakeasyBase {
    links: LinksSigningBasket;
    basketId: string;
    challengeData?: ChallengeData;
    chosenScaMethod?: ChosenScaMethod;
    psuMessage?: string;
    scaMethods?: AuthenticationObject[];
    tppMessages?: TppMessage2Xx[];
    transactionStatus: TransactionStatusSbsEnum;
}
