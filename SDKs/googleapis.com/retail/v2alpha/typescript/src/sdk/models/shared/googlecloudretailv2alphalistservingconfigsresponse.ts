import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaServingConfig } from "./googlecloudretailv2alphaservingconfig";



// GoogleCloudRetailV2alphaListServingConfigsResponse
/** 
 * Response for ListServingConfigs method.
**/
export class GoogleCloudRetailV2alphaListServingConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=servingConfigs", elemType: GoogleCloudRetailV2alphaServingConfig })
  servingConfigs?: GoogleCloudRetailV2alphaServingConfig[];
}
