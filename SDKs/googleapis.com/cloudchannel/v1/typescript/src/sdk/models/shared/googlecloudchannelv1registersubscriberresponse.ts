import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1RegisterSubscriberResponse
/** 
 * Response Message for RegisterSubscriber.
**/
export class GoogleCloudChannelV1RegisterSubscriberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
