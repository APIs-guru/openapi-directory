import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageAnnotationContext } from "./imageannotationcontext";
import { CropHintsAnnotation } from "./crophintsannotation";
import { Status } from "./status";
import { FaceAnnotation } from "./faceannotation";
import { TextAnnotation } from "./textannotation";
import { ImageProperties } from "./imageproperties";
import { EntityAnnotation } from "./entityannotation";
import { LocalizedObjectAnnotation } from "./localizedobjectannotation";
import { ProductSearchResults } from "./productsearchresults";
import { SafeSearchAnnotation } from "./safesearchannotation";
import { WebDetection } from "./webdetection";



// AnnotateImageResponse
/** 
 * Response to an image annotation request.
**/
export class AnnotateImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ImageAnnotationContext;

  @SpeakeasyMetadata({ data: "json, name=cropHintsAnnotation" })
  cropHintsAnnotation?: CropHintsAnnotation;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=faceAnnotations", elemType: FaceAnnotation })
  faceAnnotations?: FaceAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=fullTextAnnotation" })
  fullTextAnnotation?: TextAnnotation;

  @SpeakeasyMetadata({ data: "json, name=imagePropertiesAnnotation" })
  imagePropertiesAnnotation?: ImageProperties;

  @SpeakeasyMetadata({ data: "json, name=labelAnnotations", elemType: EntityAnnotation })
  labelAnnotations?: EntityAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=landmarkAnnotations", elemType: EntityAnnotation })
  landmarkAnnotations?: EntityAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=localizedObjectAnnotations", elemType: LocalizedObjectAnnotation })
  localizedObjectAnnotations?: LocalizedObjectAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=logoAnnotations", elemType: EntityAnnotation })
  logoAnnotations?: EntityAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=productSearchResults" })
  productSearchResults?: ProductSearchResults;

  @SpeakeasyMetadata({ data: "json, name=safeSearchAnnotation" })
  safeSearchAnnotation?: SafeSearchAnnotation;

  @SpeakeasyMetadata({ data: "json, name=textAnnotations", elemType: EntityAnnotation })
  textAnnotations?: EntityAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=webDetection" })
  webDetection?: WebDetection;
}
