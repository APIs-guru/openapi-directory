import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPaymentsResellerSubscriptionV1Duration } from "./googlecloudpaymentsresellersubscriptionv1duration";


// GoogleCloudPaymentsResellerSubscriptionV1Extension
/** 
 * Describes the details of an extension request.
**/
export class GoogleCloudPaymentsResellerSubscriptionV1Extension extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: GoogleCloudPaymentsResellerSubscriptionV1Duration;

  @Metadata({ data: "json, name=partnerUserToken" })
  partnerUserToken?: string;
}
