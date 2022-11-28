import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1BoundingPolyConfig
/** 
 * Config for image bounding poly (and bounding box) human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1BoundingPolyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @SpeakeasyMetadata({ data: "json, name=instructionMessage" })
  instructionMessage?: string;
}
