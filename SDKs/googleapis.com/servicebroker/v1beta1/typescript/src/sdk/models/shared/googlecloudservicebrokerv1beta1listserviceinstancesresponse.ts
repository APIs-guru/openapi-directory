import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1ServiceInstance } from "./googlecloudservicebrokerv1beta1serviceinstance";



// GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse
/** 
 * The response for the `ListServiceInstances()` method.
**/
export class GoogleCloudServicebrokerV1beta1ListServiceInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: GoogleCloudServicebrokerV1beta1ServiceInstance })
  instances?: GoogleCloudServicebrokerV1beta1ServiceInstance[];

  @SpeakeasyMetadata()
  nextPageToken?: string;
}
