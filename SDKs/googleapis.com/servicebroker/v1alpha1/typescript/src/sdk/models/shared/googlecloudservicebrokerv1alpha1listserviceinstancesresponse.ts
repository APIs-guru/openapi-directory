import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1alpha1ServiceInstance } from "./googlecloudservicebrokerv1alpha1serviceinstance";



// GoogleCloudServicebrokerV1alpha1ListServiceInstancesResponse
/** 
 * The response for the `ListServiceInstances()` method.
**/
export class GoogleCloudServicebrokerV1alpha1ListServiceInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata({ elemType: GoogleCloudServicebrokerV1alpha1ServiceInstance })
  instances?: GoogleCloudServicebrokerV1alpha1ServiceInstance[];

  @SpeakeasyMetadata()
  nextPageToken?: string;
}
