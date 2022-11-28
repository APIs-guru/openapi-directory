import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions } from "./googleclouddataplexv1zonediscoveryspeccsvoptions";
import { GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions } from "./googleclouddataplexv1zonediscoveryspecjsonoptions";
/**
 * Settings to manage the metadata discovery and publishing in a zone.
**/
export declare class GoogleCloudDataplexV1ZoneDiscoverySpec extends SpeakeasyBase {
    csvOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions;
    enabled?: boolean;
    excludePatterns?: string[];
    includePatterns?: string[];
    jsonOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions;
    schedule?: string;
}
