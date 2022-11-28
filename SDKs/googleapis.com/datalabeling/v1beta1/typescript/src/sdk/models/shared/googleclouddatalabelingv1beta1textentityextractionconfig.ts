import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig
/** 
 * Config for text entity extraction human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1TextEntityExtractionConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;
}
