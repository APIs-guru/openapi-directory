import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions } from "./googleclouddataplexv1zonediscoveryspeccsvoptions";
import { GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions } from "./googleclouddataplexv1zonediscoveryspecjsonoptions";



// GoogleCloudDataplexV1ZoneDiscoverySpec
/** 
 * Settings to manage the metadata discovery and publishing in a zone.
**/
export class GoogleCloudDataplexV1ZoneDiscoverySpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=csvOptions" })
  csvOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludePatterns" })
  excludePatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=includePatterns" })
  includePatterns?: string[];

  @SpeakeasyMetadata({ data: "json, name=jsonOptions" })
  jsonOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: string;
}
