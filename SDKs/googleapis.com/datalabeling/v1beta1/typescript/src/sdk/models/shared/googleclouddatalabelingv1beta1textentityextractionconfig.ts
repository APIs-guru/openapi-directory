import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig
/** 
 * Config for text entity extraction human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;
}
