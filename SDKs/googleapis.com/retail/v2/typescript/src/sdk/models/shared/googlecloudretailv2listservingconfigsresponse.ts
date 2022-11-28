import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ServingConfig } from "./googlecloudretailv2servingconfig";



// GoogleCloudRetailV2ListServingConfigsResponse
/** 
 * Response for ListServingConfigs method.
**/
export class GoogleCloudRetailV2ListServingConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=servingConfigs", elemType: GoogleCloudRetailV2ServingConfig })
  servingConfigs?: GoogleCloudRetailV2ServingConfig[];
}
