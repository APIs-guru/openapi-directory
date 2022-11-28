import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationProfile } from "./googleclouddialogflowv2conversationprofile";
/**
 * The response message for ConversationProfiles.ListConversationProfiles.
**/
export declare class GoogleCloudDialogflowV2ListConversationProfilesResponse extends SpeakeasyBase {
    conversationProfiles?: GoogleCloudDialogflowV2ConversationProfile[];
    nextPageToken?: string;
}
