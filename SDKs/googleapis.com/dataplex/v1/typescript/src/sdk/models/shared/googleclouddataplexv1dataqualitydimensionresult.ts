import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1DataQualityDimensionResult
/** 
 * DataQualityDimensionResult provides a more detailed, per-dimension level view of the results.
**/
export class GoogleCloudDataplexV1DataQualityDimensionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=passed" })
  passed?: boolean;
}
