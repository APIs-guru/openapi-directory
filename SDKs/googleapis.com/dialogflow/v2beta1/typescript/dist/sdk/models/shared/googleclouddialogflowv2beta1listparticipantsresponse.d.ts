import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Participant } from "./googleclouddialogflowv2beta1participant";
/**
 * The response message for Participants.ListParticipants.
**/
export declare class GoogleCloudDialogflowV2beta1ListParticipantsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    participants?: GoogleCloudDialogflowV2beta1Participant[];
}
