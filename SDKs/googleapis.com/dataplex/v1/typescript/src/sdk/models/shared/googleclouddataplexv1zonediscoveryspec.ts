import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions } from "./googleclouddataplexv1zonediscoveryspeccsvoptions";
import { GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions } from "./googleclouddataplexv1zonediscoveryspecjsonoptions";


// GoogleCloudDataplexV1ZoneDiscoverySpec
/** 
 * Settings to manage the metadata discovery and publishing in a zone.
**/
export class GoogleCloudDataplexV1ZoneDiscoverySpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=csvOptions" })
  csvOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=excludePatterns" })
  excludePatterns?: string[];

  @Metadata({ data: "json, name=includePatterns" })
  includePatterns?: string[];

  @Metadata({ data: "json, name=jsonOptions" })
  jsonOptions?: GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions;

  @Metadata({ data: "json, name=schedule" })
  schedule?: string;
}
