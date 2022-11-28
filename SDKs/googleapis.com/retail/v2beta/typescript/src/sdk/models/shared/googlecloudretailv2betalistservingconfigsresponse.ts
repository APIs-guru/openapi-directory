import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaServingConfig } from "./googlecloudretailv2betaservingconfig";



// GoogleCloudRetailV2betaListServingConfigsResponse
/** 
 * Response for ListServingConfigs method.
**/
export class GoogleCloudRetailV2betaListServingConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=servingConfigs", elemType: GoogleCloudRetailV2betaServingConfig })
  servingConfigs?: GoogleCloudRetailV2betaServingConfig[];
}
