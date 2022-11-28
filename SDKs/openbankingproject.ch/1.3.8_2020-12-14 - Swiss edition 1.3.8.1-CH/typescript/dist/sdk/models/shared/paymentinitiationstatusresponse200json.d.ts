import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionStatusEnum } from "./transactionstatusenum";
/**
 * Body of the response for a successful payment initiation status request in case of an JSON based endpoint.
**/
export declare class PaymentInitiationStatusResponse200Json extends SpeakeasyBase {
    fundsAvailable?: boolean;
    psuMessage?: string;
    transactionStatus: TransactionStatusEnum;
}
