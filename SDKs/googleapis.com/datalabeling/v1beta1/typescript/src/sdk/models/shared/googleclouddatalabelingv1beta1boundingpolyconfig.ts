import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1BoundingPolyConfig
/** 
 * Config for image bounding poly (and bounding box) human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1BoundingPolyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @Metadata({ data: "json, name=instructionMessage" })
  instructionMessage?: string;
}
