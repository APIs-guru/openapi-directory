import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ImageAnnotationContext } from "./imageannotationcontext";
import { CropHintsAnnotation } from "./crophintsannotation";
import { Status } from "./status";
import { FaceAnnotation } from "./faceannotation";
import { TextAnnotation } from "./textannotation";
import { ImageProperties } from "./imageproperties";
import { EntityAnnotation } from "./entityannotation";
import { EntityAnnotation } from "./entityannotation";
import { LocalizedObjectAnnotation } from "./localizedobjectannotation";
import { EntityAnnotation } from "./entityannotation";
import { ProductSearchResults } from "./productsearchresults";
import { SafeSearchAnnotation } from "./safesearchannotation";
import { EntityAnnotation } from "./entityannotation";
import { WebDetection } from "./webdetection";


// AnnotateImageResponse
/** 
 * Response to an image annotation request.
**/
export class AnnotateImageResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: ImageAnnotationContext;

  @Metadata({ data: "json, name=cropHintsAnnotation" })
  cropHintsAnnotation?: CropHintsAnnotation;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=faceAnnotations", elemType: shared.FaceAnnotation })
  faceAnnotations?: FaceAnnotation[];

  @Metadata({ data: "json, name=fullTextAnnotation" })
  fullTextAnnotation?: TextAnnotation;

  @Metadata({ data: "json, name=imagePropertiesAnnotation" })
  imagePropertiesAnnotation?: ImageProperties;

  @Metadata({ data: "json, name=labelAnnotations", elemType: shared.EntityAnnotation })
  labelAnnotations?: EntityAnnotation[];

  @Metadata({ data: "json, name=landmarkAnnotations", elemType: shared.EntityAnnotation })
  landmarkAnnotations?: EntityAnnotation[];

  @Metadata({ data: "json, name=localizedObjectAnnotations", elemType: shared.LocalizedObjectAnnotation })
  localizedObjectAnnotations?: LocalizedObjectAnnotation[];

  @Metadata({ data: "json, name=logoAnnotations", elemType: shared.EntityAnnotation })
  logoAnnotations?: EntityAnnotation[];

  @Metadata({ data: "json, name=productSearchResults" })
  productSearchResults?: ProductSearchResults;

  @Metadata({ data: "json, name=safeSearchAnnotation" })
  safeSearchAnnotation?: SafeSearchAnnotation;

  @Metadata({ data: "json, name=textAnnotations", elemType: shared.EntityAnnotation })
  textAnnotations?: EntityAnnotation[];

  @Metadata({ data: "json, name=webDetection" })
  webDetection?: WebDetection;
}
