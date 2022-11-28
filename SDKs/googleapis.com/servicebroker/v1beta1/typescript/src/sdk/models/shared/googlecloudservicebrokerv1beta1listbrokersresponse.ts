import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1Broker } from "./googlecloudservicebrokerv1beta1broker";



// GoogleCloudServicebrokerV1beta1ListBrokersResponse
/** 
 * The response for the `ListBrokers()` method.
**/
export class GoogleCloudServicebrokerV1beta1ListBrokersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GoogleCloudServicebrokerV1beta1Broker })
  brokers?: GoogleCloudServicebrokerV1beta1Broker[];

  @SpeakeasyMetadata()
  nextPageToken?: string;
}
