import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsConversationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    conversationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsCreateRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsConversationsCreatePathParams;
    queryParams: ContactcenterinsightsProjectsLocationsConversationsCreateQueryParams;
    request?: shared.GoogleCloudContactcenterinsightsV1ConversationInput;
    security: ContactcenterinsightsProjectsLocationsConversationsCreateSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudContactcenterinsightsV1Conversation?: shared.GoogleCloudContactcenterinsightsV1Conversation;
    statusCode: number;
}
