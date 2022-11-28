import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationProfile } from "./googleclouddialogflowv2conversationprofile";



// GoogleCloudDialogflowV2ListConversationProfilesResponse
/** 
 * The response message for ConversationProfiles.ListConversationProfiles.
**/
export class GoogleCloudDialogflowV2ListConversationProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationProfiles", elemType: GoogleCloudDialogflowV2ConversationProfile })
  conversationProfiles?: GoogleCloudDialogflowV2ConversationProfile[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
