import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudServicebrokerV1alpha1Plan
/** 
 * Plan message describes a Service Plan.
**/
export class GoogleCloudServicebrokerV1alpha1Plan extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bindable?: boolean;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  free?: boolean;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  metadata?: Map<string, any>;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  schemas?: Map<string, any>;
}
