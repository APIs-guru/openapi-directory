import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions } from "./googleclouddataplexv1assetdiscoveryspeccsvoptions";
import { GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions } from "./googleclouddataplexv1assetdiscoveryspecjsonoptions";
/**
 * Settings to manage the metadata discovery and publishing for an asset.
**/
export declare class GoogleCloudDataplexV1AssetDiscoverySpec extends SpeakeasyBase {
    csvOptions?: GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions;
    enabled?: boolean;
    excludePatterns?: string[];
    includePatterns?: string[];
    jsonOptions?: GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions;
    schedule?: string;
}
