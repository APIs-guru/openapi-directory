import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions } from "./googleclouddataplexv1assetdiscoveryspeccsvoptions";
import { GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions } from "./googleclouddataplexv1assetdiscoveryspecjsonoptions";



// GoogleCloudDataplexV1AssetDiscoverySpec
/** 
 * Settings to manage the metadata discovery and publishing for an asset.
**/
export class GoogleCloudDataplexV1AssetDiscoverySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=csvOptions" })
  csvOptions?: GoogleCloudDataplexV1AssetDiscoverySpecCsvOptions;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludePatterns" })
  excludePatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=includePatterns" })
  includePatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=jsonOptions" })
  jsonOptions?: GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: string;
}
