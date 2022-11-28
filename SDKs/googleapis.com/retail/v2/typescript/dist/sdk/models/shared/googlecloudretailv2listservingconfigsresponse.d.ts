import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2ServingConfig } from "./googlecloudretailv2servingconfig";
/**
 * Response for ListServingConfigs method.
**/
export declare class GoogleCloudRetailV2ListServingConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    servingConfigs?: GoogleCloudRetailV2ServingConfig[];
}
