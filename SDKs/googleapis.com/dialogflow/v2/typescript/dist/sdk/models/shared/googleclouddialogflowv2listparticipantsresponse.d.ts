import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Participant } from "./googleclouddialogflowv2participant";
/**
 * The response message for Participants.ListParticipants.
**/
export declare class GoogleCloudDialogflowV2ListParticipantsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    participants?: GoogleCloudDialogflowV2Participant[];
}
