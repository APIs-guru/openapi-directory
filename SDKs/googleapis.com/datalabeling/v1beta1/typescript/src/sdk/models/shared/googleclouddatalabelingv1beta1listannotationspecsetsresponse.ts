import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1AnnotationSpecSet } from "./googleclouddatalabelingv1beta1annotationspecset";



// GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse
/** 
 * Results of listing annotation spec set under a project.
**/
export class GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotationSpecSets", elemType: GoogleCloudDatalabelingV1beta1AnnotationSpecSet })
  annotationSpecSets?: GoogleCloudDatalabelingV1beta1AnnotationSpecSet[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
