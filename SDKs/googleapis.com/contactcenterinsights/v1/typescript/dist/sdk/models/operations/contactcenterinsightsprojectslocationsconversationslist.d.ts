import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsConversationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ContactcenterinsightsProjectsLocationsConversationsListViewEnum {
    ConversationViewUnspecified = "CONVERSATION_VIEW_UNSPECIFIED",
    Full = "FULL",
    Basic = "BASIC"
}
export declare class ContactcenterinsightsProjectsLocationsConversationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: ContactcenterinsightsProjectsLocationsConversationsListViewEnum;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsListRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsConversationsListPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsConversationsListQueryParams;
    security: ContactcenterinsightsProjectsLocationsConversationsListSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudContactcenterinsightsV1ListConversationsResponse?: shared.GoogleCloudContactcenterinsightsV1ListConversationsResponse;
    statusCode: number;
}
