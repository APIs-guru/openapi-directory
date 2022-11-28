import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1Conversation } from "./googlecloudcontactcenterinsightsv1conversation";
/**
 * The response of listing conversations.
**/
export declare class GoogleCloudContactcenterinsightsV1ListConversationsResponse extends SpeakeasyBase {
    conversations?: GoogleCloudContactcenterinsightsV1Conversation[];
    nextPageToken?: string;
}
