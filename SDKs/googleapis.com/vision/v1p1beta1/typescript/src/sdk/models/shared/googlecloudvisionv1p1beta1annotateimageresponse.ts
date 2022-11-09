import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudVisionV1p1beta1ImageAnnotationContext } from "./googlecloudvisionv1p1beta1imageannotationcontext";
import { GoogleCloudVisionV1p1beta1CropHintsAnnotation } from "./googlecloudvisionv1p1beta1crophintsannotation";
import { Status } from "./status";
import { GoogleCloudVisionV1p1beta1FaceAnnotation } from "./googlecloudvisionv1p1beta1faceannotation";
import { GoogleCloudVisionV1p1beta1TextAnnotation } from "./googlecloudvisionv1p1beta1textannotation";
import { GoogleCloudVisionV1p1beta1ImageProperties } from "./googlecloudvisionv1p1beta1imageproperties";
import { GoogleCloudVisionV1p1beta1EntityAnnotation } from "./googlecloudvisionv1p1beta1entityannotation";
import { GoogleCloudVisionV1p1beta1EntityAnnotation } from "./googlecloudvisionv1p1beta1entityannotation";
import { GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation } from "./googlecloudvisionv1p1beta1localizedobjectannotation";
import { GoogleCloudVisionV1p1beta1EntityAnnotation } from "./googlecloudvisionv1p1beta1entityannotation";
import { GoogleCloudVisionV1p1beta1ProductSearchResults } from "./googlecloudvisionv1p1beta1productsearchresults";
import { GoogleCloudVisionV1p1beta1SafeSearchAnnotation } from "./googlecloudvisionv1p1beta1safesearchannotation";
import { GoogleCloudVisionV1p1beta1EntityAnnotation } from "./googlecloudvisionv1p1beta1entityannotation";
import { GoogleCloudVisionV1p1beta1WebDetection } from "./googlecloudvisionv1p1beta1webdetection";


// GoogleCloudVisionV1p1beta1AnnotateImageResponse
/** 
 * Response to an image annotation request.
**/
export class GoogleCloudVisionV1p1beta1AnnotateImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: GoogleCloudVisionV1p1beta1ImageAnnotationContext;

  @Metadata({ data: "json, name=cropHintsAnnotation" })
  cropHintsAnnotation?: GoogleCloudVisionV1p1beta1CropHintsAnnotation;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=faceAnnotations", elemType: shared.GoogleCloudVisionV1p1beta1FaceAnnotation })
  faceAnnotations?: GoogleCloudVisionV1p1beta1FaceAnnotation[];

  @Metadata({ data: "json, name=fullTextAnnotation" })
  fullTextAnnotation?: GoogleCloudVisionV1p1beta1TextAnnotation;

  @Metadata({ data: "json, name=imagePropertiesAnnotation" })
  imagePropertiesAnnotation?: GoogleCloudVisionV1p1beta1ImageProperties;

  @Metadata({ data: "json, name=labelAnnotations", elemType: shared.GoogleCloudVisionV1p1beta1EntityAnnotation })
  labelAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];

  @Metadata({ data: "json, name=landmarkAnnotations", elemType: shared.GoogleCloudVisionV1p1beta1EntityAnnotation })
  landmarkAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];

  @Metadata({ data: "json, name=localizedObjectAnnotations", elemType: shared.GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation })
  localizedObjectAnnotations?: GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation[];

  @Metadata({ data: "json, name=logoAnnotations", elemType: shared.GoogleCloudVisionV1p1beta1EntityAnnotation })
  logoAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];

  @Metadata({ data: "json, name=productSearchResults" })
  productSearchResults?: GoogleCloudVisionV1p1beta1ProductSearchResults;

  @Metadata({ data: "json, name=safeSearchAnnotation" })
  safeSearchAnnotation?: GoogleCloudVisionV1p1beta1SafeSearchAnnotation;

  @Metadata({ data: "json, name=textAnnotations", elemType: shared.GoogleCloudVisionV1p1beta1EntityAnnotation })
  textAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];

  @Metadata({ data: "json, name=webDetection" })
  webDetection?: GoogleCloudVisionV1p1beta1WebDetection;
}
