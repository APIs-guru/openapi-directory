import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1ConversationProfile } from "./googleclouddialogflowv2beta1conversationprofile";


// GoogleCloudDialogflowV2beta1ListConversationProfilesResponse
/** 
 * The response message for ConversationProfiles.ListConversationProfiles.
**/
export class GoogleCloudDialogflowV2beta1ListConversationProfilesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationProfiles", elemType: shared.GoogleCloudDialogflowV2beta1ConversationProfile })
  conversationProfiles?: GoogleCloudDialogflowV2beta1ConversationProfile[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
