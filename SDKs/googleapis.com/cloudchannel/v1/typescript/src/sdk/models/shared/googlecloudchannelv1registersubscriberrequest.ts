import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1RegisterSubscriberRequest
/** 
 * Request Message for RegisterSubscriber.
**/
export class GoogleCloudChannelV1RegisterSubscriberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
