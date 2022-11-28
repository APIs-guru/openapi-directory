import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationProfilesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationProfilesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsConversationProfilesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationProfilesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationProfilesListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationProfilesListSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationProfilesListSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationProfilesListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationProfilesListPathParams;
    queryParams: DialogflowProjectsLocationsConversationProfilesListQueryParams;
    security: DialogflowProjectsLocationsConversationProfilesListSecurity;
}
export declare class DialogflowProjectsLocationsConversationProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2ListConversationProfilesResponse?: shared.GoogleCloudDialogflowV2ListConversationProfilesResponse;
    statusCode: number;
}
