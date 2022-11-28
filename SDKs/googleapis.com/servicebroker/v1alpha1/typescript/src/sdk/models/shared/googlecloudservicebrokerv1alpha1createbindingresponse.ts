import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudServicebrokerV1alpha1CreateBindingResponse
/** 
 * Response for the `CreateBinding()` method.
**/
export class GoogleCloudServicebrokerV1alpha1CreateBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  credentials?: Map<string, any>;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  operation?: string;

  @SpeakeasyMetadata()
  routeServiceUrl?: string;

  @SpeakeasyMetadata()
  syslogDrainUrl?: string;

  @SpeakeasyMetadata()
  volumeMounts?: Map<string, any>[];
}
