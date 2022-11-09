import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2ConversationProfile } from "./googleclouddialogflowv2conversationprofile";


// GoogleCloudDialogflowV2ListConversationProfilesResponse
/** 
 * The response message for ConversationProfiles.ListConversationProfiles.
**/
export class GoogleCloudDialogflowV2ListConversationProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationProfiles", elemType: shared.GoogleCloudDialogflowV2ConversationProfile })
  conversationProfiles?: GoogleCloudDialogflowV2ConversationProfile[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
