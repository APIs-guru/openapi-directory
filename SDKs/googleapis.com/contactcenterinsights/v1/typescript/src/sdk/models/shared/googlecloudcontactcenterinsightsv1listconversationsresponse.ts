import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1Conversation } from "./googlecloudcontactcenterinsightsv1conversation";



// GoogleCloudContactcenterinsightsV1ListConversationsResponse
/** 
 * The response of listing conversations.
**/
export class GoogleCloudContactcenterinsightsV1ListConversationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversations", elemType: GoogleCloudContactcenterinsightsV1Conversation })
  conversations?: GoogleCloudContactcenterinsightsV1Conversation[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
