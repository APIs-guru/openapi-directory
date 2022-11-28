import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaServingConfig } from "./googlecloudretailv2alphaservingconfig";
/**
 * Response for ListServingConfigs method.
**/
export declare class GoogleCloudRetailV2alphaListServingConfigsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    servingConfigs?: GoogleCloudRetailV2alphaServingConfig[];
}
