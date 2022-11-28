import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ConversationProfile } from "./googleclouddialogflowv2beta1conversationprofile";
/**
 * The response message for ConversationProfiles.ListConversationProfiles.
**/
export declare class GoogleCloudDialogflowV2beta1ListConversationProfilesResponse extends SpeakeasyBase {
    conversationProfiles?: GoogleCloudDialogflowV2beta1ConversationProfile[];
    nextPageToken?: string;
}
