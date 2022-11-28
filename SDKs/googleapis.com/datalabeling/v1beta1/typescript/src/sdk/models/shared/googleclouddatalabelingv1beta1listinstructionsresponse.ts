import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Instruction } from "./googleclouddatalabelingv1beta1instruction";



// GoogleCloudDatalabelingV1beta1ListInstructionsResponse
/** 
 * Results of listing instructions under a project.
**/
export class GoogleCloudDatalabelingV1beta1ListInstructionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instructions", elemType: GoogleCloudDatalabelingV1beta1Instruction })
  instructions?: GoogleCloudDatalabelingV1beta1Instruction[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
