import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDatalabelingV1beta1Instruction } from "./googleclouddatalabelingv1beta1instruction";


// GoogleCloudDatalabelingV1beta1ListInstructionsResponse
/** 
 * Results of listing instructions under a project.
**/
export class GoogleCloudDatalabelingV1beta1ListInstructionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=instructions", elemType: shared.GoogleCloudDatalabelingV1beta1Instruction })
  instructions?: GoogleCloudDatalabelingV1beta1Instruction[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
