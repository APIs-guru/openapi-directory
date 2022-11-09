import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1EventConfig
/** 
 * Config for video event human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1EventConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecSets" })
  annotationSpecSets?: string[];

  @Metadata({ data: "json, name=clipLength" })
  clipLength?: number;

  @Metadata({ data: "json, name=overlapLength" })
  overlapLength?: number;
}
