import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1AnnotationSpec } from "./googleclouddatalabelingv1beta1annotationspec";


// GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation
/** 
 * Image segmentation annotation.
**/
export class GoogleCloudDatalabelingV1beta1ImageSegmentationAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationColors", elemType: shared.GoogleCloudDatalabelingV1beta1AnnotationSpec })
  annotationColors?: Map<string, GoogleCloudDatalabelingV1beta1AnnotationSpec>;

  @Metadata({ data: "json, name=imageBytes" })
  imageBytes?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
