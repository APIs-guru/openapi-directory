import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaUserEvent } from "./googleclouddiscoveryenginev1alphauserevent";



// GoogleCloudDiscoveryengineV1alphaRecommendRequest
/** 
 * Request message for Recommend method.
**/
export class GoogleCloudDiscoveryengineV1alphaRecommendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=userEvent" })
  userEvent?: GoogleCloudDiscoveryengineV1alphaUserEvent;

  @SpeakeasyMetadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
