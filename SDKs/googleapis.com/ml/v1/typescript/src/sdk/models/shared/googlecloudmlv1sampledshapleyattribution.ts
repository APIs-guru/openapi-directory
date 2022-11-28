import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1SampledShapleyAttribution
/** 
 * An attribution method that approximates Shapley values for features that contribute to the label being predicted. A sampling strategy is used to approximate the value rather than considering all subsets of features.
**/
export class GoogleCloudMlV1SampledShapleyAttribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numPaths" })
  numPaths?: number;
}
