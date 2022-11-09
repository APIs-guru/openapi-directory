import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1UnregisterSubscriberRequest
/** 
 * Request Message for UnregisterSubscriber.
**/
export class GoogleCloudChannelV1UnregisterSubscriberRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
