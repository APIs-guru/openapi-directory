import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaServingConfig } from "./googlecloudretailv2betaservingconfig";
/**
 * Response for ListServingConfigs method.
**/
export declare class GoogleCloudRetailV2betaListServingConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    servingConfigs?: GoogleCloudRetailV2betaServingConfig[];
}
