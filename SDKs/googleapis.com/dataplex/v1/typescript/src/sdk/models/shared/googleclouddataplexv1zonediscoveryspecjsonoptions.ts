import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions
/** 
 * Describe JSON data format.
**/
export class GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableTypeInference" })
  disableTypeInference?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;
}
