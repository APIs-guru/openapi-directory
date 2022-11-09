import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2ServingConfig } from "./googlecloudretailv2servingconfig";


// GoogleCloudRetailV2ListServingConfigsResponse
/** 
 * Response for ListServingConfigs method.
**/
export class GoogleCloudRetailV2ListServingConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=servingConfigs", elemType: shared.GoogleCloudRetailV2ServingConfig })
  servingConfigs?: GoogleCloudRetailV2ServingConfig[];
}
