import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudServicebrokerV1beta1Binding } from "./googlecloudservicebrokerv1beta1binding";



// GoogleCloudServicebrokerV1beta1ListBindingsResponse
/** 
 * The response for the `ListBindings()` method.
**/
export class GoogleCloudServicebrokerV1beta1ListBindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: GoogleCloudServicebrokerV1beta1Binding })
  bindings?: GoogleCloudServicebrokerV1beta1Binding[];

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  nextPageToken?: string;
}
