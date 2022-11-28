import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SubscriptionPatchRequest
/** 
 * Updated details for the subscription.
**/
export class SubscriptionPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;
}
