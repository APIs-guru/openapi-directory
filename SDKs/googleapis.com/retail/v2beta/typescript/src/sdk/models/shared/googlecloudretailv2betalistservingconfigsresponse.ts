import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaServingConfig } from "./googlecloudretailv2betaservingconfig";


// GoogleCloudRetailV2betaListServingConfigsResponse
/** 
 * Response for ListServingConfigs method.
**/
export class GoogleCloudRetailV2betaListServingConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=servingConfigs", elemType: shared.GoogleCloudRetailV2betaServingConfig })
  servingConfigs?: GoogleCloudRetailV2betaServingConfig[];
}
