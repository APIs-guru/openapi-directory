import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Response to an image annotation request.
**/
export declare class AnnotateImageResponse extends SpeakeasyBase {
    context?: ImageAnnotationContext;
    cropHintsAnnotation?: CropHintsAnnotation;
    error?: Status;
    faceAnnotations?: FaceAnnotation[];
    fullTextAnnotation?: TextAnnotation;
    imagePropertiesAnnotation?: ImageProperties;
    labelAnnotations?: EntityAnnotation[];
    landmarkAnnotations?: EntityAnnotation[];
    localizedObjectAnnotations?: LocalizedObjectAnnotation[];
    logoAnnotations?: EntityAnnotation[];
    productSearchResults?: ProductSearchResults;
    safeSearchAnnotation?: SafeSearchAnnotation;
    textAnnotations?: EntityAnnotation[];
    webDetection?: WebDetection;
}
