import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaServingConfig } from "./googlecloudretailv2alphaservingconfig";


// GoogleCloudRetailV2alphaListServingConfigsResponse
/** 
 * Response for ListServingConfigs method.
**/
export class GoogleCloudRetailV2alphaListServingConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=servingConfigs", elemType: shared.GoogleCloudRetailV2alphaServingConfig })
  servingConfigs?: GoogleCloudRetailV2alphaServingConfig[];
}
