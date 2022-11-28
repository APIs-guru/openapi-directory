import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1ImageAnnotationContext } from "./googlecloudvisionv1p1beta1imageannotationcontext";
import { GoogleCloudVisionV1p1beta1CropHintsAnnotation } from "./googlecloudvisionv1p1beta1crophintsannotation";
import { Status } from "./status";
import { GoogleCloudVisionV1p1beta1FaceAnnotation } from "./googlecloudvisionv1p1beta1faceannotation";
import { GoogleCloudVisionV1p1beta1TextAnnotation } from "./googlecloudvisionv1p1beta1textannotation";
import { GoogleCloudVisionV1p1beta1ImageProperties } from "./googlecloudvisionv1p1beta1imageproperties";
import { GoogleCloudVisionV1p1beta1EntityAnnotation } from "./googlecloudvisionv1p1beta1entityannotation";
import { GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation } from "./googlecloudvisionv1p1beta1localizedobjectannotation";
import { GoogleCloudVisionV1p1beta1ProductSearchResults } from "./googlecloudvisionv1p1beta1productsearchresults";
import { GoogleCloudVisionV1p1beta1SafeSearchAnnotation } from "./googlecloudvisionv1p1beta1safesearchannotation";
import { GoogleCloudVisionV1p1beta1WebDetection } from "./googlecloudvisionv1p1beta1webdetection";



// GoogleCloudVisionV1p1beta1AnnotateImageResponse
/** 
 * Response to an image annotation request.
**/
export class GoogleCloudVisionV1p1beta1AnnotateImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: GoogleCloudVisionV1p1beta1ImageAnnotationContext;

  @SpeakeasyMetadata({ data: "json, name=cropHintsAnnotation" })
  cropHintsAnnotation?: GoogleCloudVisionV1p1beta1CropHintsAnnotation;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=faceAnnotations", elemType: GoogleCloudVisionV1p1beta1FaceAnnotation })
  faceAnnotations?: GoogleCloudVisionV1p1beta1FaceAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=fullTextAnnotation" })
  fullTextAnnotation?: GoogleCloudVisionV1p1beta1TextAnnotation;

  @SpeakeasyMetadata({ data: "json, name=imagePropertiesAnnotation" })
  imagePropertiesAnnotation?: GoogleCloudVisionV1p1beta1ImageProperties;

  @SpeakeasyMetadata({ data: "json, name=labelAnnotations", elemType: GoogleCloudVisionV1p1beta1EntityAnnotation })
  labelAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=landmarkAnnotations", elemType: GoogleCloudVisionV1p1beta1EntityAnnotation })
  landmarkAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=localizedObjectAnnotations", elemType: GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation })
  localizedObjectAnnotations?: GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=logoAnnotations", elemType: GoogleCloudVisionV1p1beta1EntityAnnotation })
  logoAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=productSearchResults" })
  productSearchResults?: GoogleCloudVisionV1p1beta1ProductSearchResults;

  @SpeakeasyMetadata({ data: "json, name=safeSearchAnnotation" })
  safeSearchAnnotation?: GoogleCloudVisionV1p1beta1SafeSearchAnnotation;

  @SpeakeasyMetadata({ data: "json, name=textAnnotations", elemType: GoogleCloudVisionV1p1beta1EntityAnnotation })
  textAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=webDetection" })
  webDetection?: GoogleCloudVisionV1p1beta1WebDetection;
}
