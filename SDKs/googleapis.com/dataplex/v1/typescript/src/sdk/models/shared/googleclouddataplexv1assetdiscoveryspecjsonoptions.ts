import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions
/** 
 * Describe JSON data format.
**/
export class GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableTypeInference" })
  disableTypeInference?: boolean;

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;
}
