import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1LabelStats
/** 
 * Statistics about annotation specs.
**/
export class GoogleCloudDatalabelingV1beta1LabelStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=exampleCount" })
  exampleCount?: Map<string, string>;
}
