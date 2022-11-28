import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1ImageAnnotationContext } from "./googlecloudvisionv1p2beta1imageannotationcontext";
import { GoogleCloudVisionV1p2beta1CropHintsAnnotation } from "./googlecloudvisionv1p2beta1crophintsannotation";
import { Status } from "./status";
import { GoogleCloudVisionV1p2beta1FaceAnnotation } from "./googlecloudvisionv1p2beta1faceannotation";
import { GoogleCloudVisionV1p2beta1TextAnnotation } from "./googlecloudvisionv1p2beta1textannotation";
import { GoogleCloudVisionV1p2beta1ImageProperties } from "./googlecloudvisionv1p2beta1imageproperties";
import { GoogleCloudVisionV1p2beta1EntityAnnotation } from "./googlecloudvisionv1p2beta1entityannotation";
import { GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation } from "./googlecloudvisionv1p2beta1localizedobjectannotation";
import { GoogleCloudVisionV1p2beta1ProductSearchResults } from "./googlecloudvisionv1p2beta1productsearchresults";
import { GoogleCloudVisionV1p2beta1SafeSearchAnnotation } from "./googlecloudvisionv1p2beta1safesearchannotation";
import { GoogleCloudVisionV1p2beta1WebDetection } from "./googlecloudvisionv1p2beta1webdetection";
/**
 * Response to an image annotation request.
**/
export declare class GoogleCloudVisionV1p2beta1AnnotateImageResponse extends SpeakeasyBase {
    context?: GoogleCloudVisionV1p2beta1ImageAnnotationContext;
    cropHintsAnnotation?: GoogleCloudVisionV1p2beta1CropHintsAnnotation;
    error?: Status;
    faceAnnotations?: GoogleCloudVisionV1p2beta1FaceAnnotation[];
    fullTextAnnotation?: GoogleCloudVisionV1p2beta1TextAnnotation;
    imagePropertiesAnnotation?: GoogleCloudVisionV1p2beta1ImageProperties;
    labelAnnotations?: GoogleCloudVisionV1p2beta1EntityAnnotation[];
    landmarkAnnotations?: GoogleCloudVisionV1p2beta1EntityAnnotation[];
    localizedObjectAnnotations?: GoogleCloudVisionV1p2beta1LocalizedObjectAnnotation[];
    logoAnnotations?: GoogleCloudVisionV1p2beta1EntityAnnotation[];
    productSearchResults?: GoogleCloudVisionV1p2beta1ProductSearchResults;
    safeSearchAnnotation?: GoogleCloudVisionV1p2beta1SafeSearchAnnotation;
    textAnnotations?: GoogleCloudVisionV1p2beta1EntityAnnotation[];
    webDetection?: GoogleCloudVisionV1p2beta1WebDetection;
}
