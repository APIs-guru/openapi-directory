import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Participant } from "./googleclouddialogflowv2beta1participant";



// GoogleCloudDialogflowV2beta1ListParticipantsResponse
/** 
 * The response message for Participants.ListParticipants.
**/
export class GoogleCloudDialogflowV2beta1ListParticipantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: GoogleCloudDialogflowV2beta1Participant })
  participants?: GoogleCloudDialogflowV2beta1Participant[];
}
