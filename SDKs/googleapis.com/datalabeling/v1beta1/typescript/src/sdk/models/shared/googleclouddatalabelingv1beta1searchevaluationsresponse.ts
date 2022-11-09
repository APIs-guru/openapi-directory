import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1Evaluation } from "./googleclouddatalabelingv1beta1evaluation";


// GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse
/** 
 * Results of searching evaluations.
**/
export class GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=evaluations", elemType: shared.GoogleCloudDatalabelingV1beta1Evaluation })
  evaluations?: GoogleCloudDatalabelingV1beta1Evaluation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
