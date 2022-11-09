import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeadLetterPolicy
/** 
 * Dead lettering is done on a best effort basis. The same message might be dead lettered multiple times. If validation on any of the fields fails at subscription creation/updation, the create/update subscription request will fail.
**/
export class DeadLetterPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=deadLetterTopic" })
  deadLetterTopic?: string;

  @Metadata({ data: "json, name=maxDeliveryAttempts" })
  maxDeliveryAttempts?: number;
}
