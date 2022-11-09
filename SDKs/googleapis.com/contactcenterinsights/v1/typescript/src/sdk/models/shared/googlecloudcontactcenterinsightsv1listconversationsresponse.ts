import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudContactcenterinsightsV1Conversation } from "./googlecloudcontactcenterinsightsv1conversation";


// GoogleCloudContactcenterinsightsV1ListConversationsResponse
/** 
 * The response of listing conversations.
**/
export class GoogleCloudContactcenterinsightsV1ListConversationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversations", elemType: shared.GoogleCloudContactcenterinsightsV1Conversation })
  conversations?: GoogleCloudContactcenterinsightsV1Conversation[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
