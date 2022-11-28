import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";



// GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation
/** 
 * Image segmentation annotation.
**/
export class GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationColors", elemType: GoogleCloudDatalabelingV1beta1AnnotationSpec })
  annotationColors?: Map<string, GoogleCloudDatalabelingV1beta1AnnotationSpec>;

  @SpeakeasyMetadata({ data: "json, name=imageBytes" })
  imageBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
