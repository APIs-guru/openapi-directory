import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Evaluation } from "./googleclouddatalabelingv1beta1evaluation";



// GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse
/** 
 * Results of searching evaluations.
**/
export class GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluations", elemType: GoogleCloudDatalabelingV1beta1Evaluation })
  evaluations?: GoogleCloudDatalabelingV1beta1Evaluation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
