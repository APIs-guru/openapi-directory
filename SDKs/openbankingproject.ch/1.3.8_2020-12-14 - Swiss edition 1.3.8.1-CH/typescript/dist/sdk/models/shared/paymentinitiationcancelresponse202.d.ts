import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { AuthenticationObject } from "./authenticationobject";
import { TransactionStatusEnum } from "./transactionstatusenum";
/**
 * Body of the response for a successful cancel payment request.
**/
export declare class PaymentInitiationCancelResponse202 extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    challengeData?: ChallengeData;
    chosenScaMethod?: ChosenScaMethod;
    scaMethods?: AuthenticationObject[];
    transactionStatus: TransactionStatusEnum;
}
