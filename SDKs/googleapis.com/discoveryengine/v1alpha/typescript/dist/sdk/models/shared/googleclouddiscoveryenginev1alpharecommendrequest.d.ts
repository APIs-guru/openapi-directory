import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1alphaUserEvent } from "./googleclouddiscoveryenginev1alphauserevent";
/**
 * Request message for Recommend method.
**/
export declare class GoogleCloudDiscoveryengineV1alphaRecommendRequest extends SpeakeasyBase {
    filter?: string;
    pageSize?: number;
    params?: Map<string, any>;
    userEvent?: GoogleCloudDiscoveryengineV1alphaUserEvent;
    userLabels?: Map<string, string>;
    validateOnly?: boolean;
}
