import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1LabelStats
/** 
 * Statistics about annotation specs.
**/
export class GoogleCloudDatalabelingV1beta1LabelStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exampleCount" })
  exampleCount?: Map<string, string>;
}
