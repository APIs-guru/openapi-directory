import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Participant } from "./googleclouddialogflowv2participant";



// GoogleCloudDialogflowV2ListParticipantsResponse
/** 
 * The response message for Participants.ListParticipants.
**/
export class GoogleCloudDialogflowV2ListParticipantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: GoogleCloudDialogflowV2Participant })
  participants?: GoogleCloudDialogflowV2Participant[];
}
