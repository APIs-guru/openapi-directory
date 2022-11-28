import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1UnregisterSubscriberResponse
/** 
 * Response Message for UnregisterSubscriber.
**/
export class GoogleCloudChannelV1UnregisterSubscriberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
