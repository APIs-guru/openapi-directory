import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { ChallengeData } from "./challengedata";
import { ChosenScaMethod } from "./chosenscamethod";
import { Amount } from "./amount";
import { AuthenticationObject } from "./authenticationobject";
import { TppMessage2Xx } from "./tppmessage2xx";
import { TransactionStatusEnum } from "./transactionstatusenum";
/**
 * Body of the response for a successful payment initiation request.
**/
export declare class PaymentInitationRequestResponse201 extends SpeakeasyBase {
    links: Map<string, HrefType>;
    challengeData?: ChallengeData;
    chosenScaMethod?: ChosenScaMethod;
    currencyConversionFee?: Amount;
    estimatedInterbankSettlementAmount?: Amount;
    estimatedTotalAmount?: Amount;
    paymentId: string;
    psuMessage?: string;
    scaMethods?: AuthenticationObject[];
    tppMessages?: TppMessage2Xx[];
    transactionFeeIndicator?: boolean;
    transactionFees?: Amount;
    transactionStatus: TransactionStatusEnum;
}
