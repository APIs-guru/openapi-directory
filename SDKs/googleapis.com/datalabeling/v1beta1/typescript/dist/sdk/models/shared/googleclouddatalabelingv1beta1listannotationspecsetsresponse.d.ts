import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpecSet } from "./googleclouddatalabelingv1beta1annotationspecset";
/**
 * Results of listing annotation spec set under a project.
**/
export declare class GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse extends SpeakeasyBase {
    annotationSpecSets?: GoogleCloudDatalabelingV1beta1AnnotationSpecSet[];
    nextPageToken?: string;
}
