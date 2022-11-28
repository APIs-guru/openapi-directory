import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions
/** 
 * Describe JSON data format.
**/
export class GoogleCloudDataplexV1AssetDiscoverySpecJsonOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableTypeInference" })
  disableTypeInference?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;
}
