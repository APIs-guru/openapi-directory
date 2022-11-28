import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1EventConfig
/** 
 * Config for video event human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1EventConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecSets" })
  annotationSpecSets?: string[];

  @SpeakeasyMetadata({ data: "json, name=clipLength" })
  clipLength?: number;

  @SpeakeasyMetadata({ data: "json, name=overlapLength" })
  overlapLength?: number;
}
