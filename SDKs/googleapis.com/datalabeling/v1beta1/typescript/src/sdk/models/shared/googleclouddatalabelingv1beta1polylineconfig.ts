import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1PolylineConfig
/** 
 * Config for image polyline human labeling task.
**/
export class GoogleCloudDatalabelingV1beta1PolylineConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @Metadata({ data: "json, name=instructionMessage" })
  instructionMessage?: string;
}
