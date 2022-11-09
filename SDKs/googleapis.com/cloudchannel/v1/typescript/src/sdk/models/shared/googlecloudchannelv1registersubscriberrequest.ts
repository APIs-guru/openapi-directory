import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1RegisterSubscriberRequest
/** 
 * Request Message for RegisterSubscriber.
**/
export class GoogleCloudChannelV1RegisterSubscriberRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;
}
