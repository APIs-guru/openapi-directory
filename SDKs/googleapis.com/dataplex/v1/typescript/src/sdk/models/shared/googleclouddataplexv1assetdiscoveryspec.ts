import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions } from "./googleclouddataplexv1assetdiscoveryspeccsvoptions";
import { GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions } from "./googleclouddataplexv1assetdiscoveryspecjsonoptions";


// GoogleCloudDataplexV1AssetDiscoverySpec
/** 
 * Settings to manage the metadata discovery and publishing for an asset.
**/
export class GoogleCloudDataplexV1AssetDiscoverySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=csvOptions" })
  csvOptions?: GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=excludePatterns" })
  excludePatterns?: string[];

  @Metadata({ data: "json, name=includePatterns" })
  includePatterns?: string[];

  @Metadata({ data: "json, name=jsonOptions" })
  jsonOptions?: GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions;

  @Metadata({ data: "json, name=schedule" })
  schedule?: string;
}
