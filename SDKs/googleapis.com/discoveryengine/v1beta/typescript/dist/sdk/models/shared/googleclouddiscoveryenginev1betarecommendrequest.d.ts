import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDiscoveryengineV1betaUserEvent } from "./googleclouddiscoveryenginev1betauserevent";
/**
 * Request message for Recommend method.
**/
export declare class GoogleCloudDiscoveryengineV1betaRecommendRequest extends SpeakeasyBase {
    filter?: string;
    pageSize?: number;
    params?: Map<string, any>;
    userEvent?: GoogleCloudDiscoveryengineV1betaUserEvent;
    userLabels?: Map<string, string>;
    validateOnly?: boolean;
}
