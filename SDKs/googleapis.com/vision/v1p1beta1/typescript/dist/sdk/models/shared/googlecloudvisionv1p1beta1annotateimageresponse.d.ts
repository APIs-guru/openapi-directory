import { SpeakeasyBase } from "../../../internal/utils";
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
/**
 * Response to an image annotation request.
**/
export declare class GoogleCloudVisionV1p1beta1AnnotateImageResponse extends SpeakeasyBase {
    context?: GoogleCloudVisionV1p1beta1ImageAnnotationContext;
    cropHintsAnnotation?: GoogleCloudVisionV1p1beta1CropHintsAnnotation;
    error?: Status;
    faceAnnotations?: GoogleCloudVisionV1p1beta1FaceAnnotation[];
    fullTextAnnotation?: GoogleCloudVisionV1p1beta1TextAnnotation;
    imagePropertiesAnnotation?: GoogleCloudVisionV1p1beta1ImageProperties;
    labelAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];
    landmarkAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];
    localizedObjectAnnotations?: GoogleCloudVisionV1p1beta1LocalizedObjectAnnotation[];
    logoAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];
    productSearchResults?: GoogleCloudVisionV1p1beta1ProductSearchResults;
    safeSearchAnnotation?: GoogleCloudVisionV1p1beta1SafeSearchAnnotation;
    textAnnotations?: GoogleCloudVisionV1p1beta1EntityAnnotation[];
    webDetection?: GoogleCloudVisionV1p1beta1WebDetection;
}
