import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Dead lettering is done on a best effort basis. The same message might be dead lettered multiple times. If validation on any of the fields fails at subscription creation/updation, the create/update subscription request will fail.
**/
export declare class DeadLetterPolicy extends SpeakeasyBase {
    deadLetterTopic?: string;
    maxDeliveryAttempts?: number;
}
