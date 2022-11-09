import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1Participant } from "./googleclouddialogflowv2beta1participant";


// GoogleCloudDialogflowV2beta1ListParticipantsResponse
/** 
 * The response message for Participants.ListParticipants.
**/
export class GoogleCloudDialogflowV2beta1ListParticipantsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=participants", elemType: shared.GoogleCloudDialogflowV2beta1Participant })
  participants?: GoogleCloudDialogflowV2beta1Participant[];
}
