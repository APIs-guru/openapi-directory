import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1SegmentationConfig
/** 
 * Config for image segmentation
**/
export class GoogleCloudDatalabelingV1beta1SegmentationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @SpeakeasyMetadata({ data: "json, name=instructionMessage" })
  instructionMessage?: string;
}
