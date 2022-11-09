import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1ObjectDetectionConfig
/** 
 * Config for video object detection human labeling task. Object detection will be conducted on the images extracted from the video, and those objects will be labeled with bounding boxes. User need to specify the number of images to be extracted per second as the extraction frame rate.
**/
export class GoogleCloudDatalabelingV1beta1ObjectDetectionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecSet" })
  annotationSpecSet?: string;

  @Metadata({ data: "json, name=extractionFrameRate" })
  extractionFrameRate?: number;
}
