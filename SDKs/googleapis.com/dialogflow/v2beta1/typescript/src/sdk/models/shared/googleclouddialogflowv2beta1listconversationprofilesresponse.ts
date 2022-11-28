import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ConversationProfile } from "./googleclouddialogflowv2beta1conversationprofile";



// GoogleCloudDialogflowV2beta1ListConversationProfilesResponse
/** 
 * The response message for ConversationProfiles.ListConversationProfiles.
**/
export class GoogleCloudDialogflowV2beta1ListConversationProfilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationProfiles", elemType: GoogleCloudDialogflowV2beta1ConversationProfile })
  conversationProfiles?: GoogleCloudDialogflowV2beta1ConversationProfile[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
