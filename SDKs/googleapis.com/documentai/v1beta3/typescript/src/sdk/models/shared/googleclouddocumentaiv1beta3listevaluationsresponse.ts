import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Evaluation } from "./googleclouddocumentaiv1beta3evaluation";



// GoogleCloudDocumentaiV1beta3ListEvaluationsResponse
/** 
 * The response from ListEvaluations.
**/
export class GoogleCloudDocumentaiV1beta3ListEvaluationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evaluations", elemType: GoogleCloudDocumentaiV1beta3Evaluation })
  evaluations?: GoogleCloudDocumentaiV1beta3Evaluation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
