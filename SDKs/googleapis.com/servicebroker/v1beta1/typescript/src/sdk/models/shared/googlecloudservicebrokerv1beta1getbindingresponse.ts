import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudServicebrokerV1beta1GetBindingResponse
/** 
 * Response for the `GetBinding()` method.
**/
export class GoogleCloudServicebrokerV1beta1GetBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  credentials?: Map<string, any>;

  @SpeakeasyMetadata()
  deploymentName?: string;

  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  resourceName?: string;

  @SpeakeasyMetadata()
  routeServiceUrl?: string;

  @SpeakeasyMetadata()
  syslogDrainUrl?: string;

  @SpeakeasyMetadata()
  volumeMounts?: Map<string, any>[];
}
