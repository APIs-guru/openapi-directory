import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions
/** 
 * Describe JSON data format.
**/
export class GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableTypeInference" })
  disableTypeInference?: boolean;

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;
}
