import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1AnnotationSpecSet } from "./googleclouddatalabelingv1beta1annotationspecset";


// GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse
/** 
 * Results of listing annotation spec set under a project.
**/
export class GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotationSpecSets", elemType: shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet })
  annotationSpecSets?: GoogleCloudDatalabelingV1beta1AnnotationSpecSet[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
