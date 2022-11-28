import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1alpha1Binding } from "./googlecloudservicebrokerv1alpha1binding";



// GoogleCloudServicebrokerV1alpha1ListBindingsResponse
/** 
 * The response for the `ListBindings()` method.
**/
export class GoogleCloudServicebrokerV1alpha1ListBindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GoogleCloudServicebrokerV1alpha1Binding })
  bindings?: GoogleCloudServicebrokerV1alpha1Binding[];

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  nextPageToken?: string;
}
