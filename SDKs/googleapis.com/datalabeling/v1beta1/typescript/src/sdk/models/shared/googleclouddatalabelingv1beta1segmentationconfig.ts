import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1SegmentationConfig
/** 
 * Config for image segmentation
**/
export class GoogleCloudDatalabelingV1beta1SegmentationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @Metadata({ data: "json, name=instructionMessage" })
  instructionMessage?: string;
}
