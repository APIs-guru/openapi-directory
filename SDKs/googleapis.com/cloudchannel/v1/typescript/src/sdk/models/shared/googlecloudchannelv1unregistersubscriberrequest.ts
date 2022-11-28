import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1UnregisterSubscriberRequest
/** 
 * Request Message for UnregisterSubscriber.
**/
export class GoogleCloudChannelV1UnregisterSubscriberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
