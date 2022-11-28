import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudServicebrokerV1alpha1GetBindingResponse
/** 
 * Response for the `GetBinding()` method.
**/
export class GoogleCloudServicebrokerV1alpha1GetBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  credentials?: Map<string, any>;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  routeServiceUrl?: string;

  @SpeakeasyMetadata()
  syslogDrainUrl?: string;

  @SpeakeasyMetadata()
  volumeMounts?: Map<string, any>[];
}
