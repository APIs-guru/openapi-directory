import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";



// GoogleCloudPaymentsResellerSubscriptionV1Extension
/** 
 * Describes the details of an extension request.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Extension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

  @SpeakeasyMetadata({ data: "json, name=partnerUserToken" })
  partnerUserToken?: string;
}
