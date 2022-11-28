import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1PolylineConfig
/** 
 * Config for image polyline human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1PolylineConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @SpeakeasyMetadata({ data: "json, name=instructionMessage" })
  instructionMessage?: string;
}
