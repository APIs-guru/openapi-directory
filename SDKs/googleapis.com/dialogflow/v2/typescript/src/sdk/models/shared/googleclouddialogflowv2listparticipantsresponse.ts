import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2Participant } from "./googleclouddialogflowv2participant";


// GoogleCloudDialogflowV2ListParticipantsResponse
/** 
 * The response message for Participants.ListParticipants.
**/
export class GoogleCloudDialogflowV2ListParticipantsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=participants", elemType: shared.GoogleCloudDialogflowV2Participant })
  participants?: GoogleCloudDialogflowV2Participant[];
}
