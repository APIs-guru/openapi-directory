import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaUserEvent } from "./googleclouddiscoveryenginev1betauserevent";



// GoogleCloudDiscoveryengineV1betaRecommendRequest
/** 
 * Request message for Recommend method.
**/
export class GoogleCloudDiscoveryengineV1betaRecommendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=userEvent" })
  userEvent?: GoogleCloudDiscoveryengineV1betaUserEvent;

  @SpeakeasyMetadata({ data: "json, name=userLabels" })
  userLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
