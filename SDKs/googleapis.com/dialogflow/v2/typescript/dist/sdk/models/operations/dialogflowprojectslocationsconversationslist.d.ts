import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationsListQueryParams extends SpeakeasyBase {
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
}
export declare class DialogflowProjectsLocationsConversationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsListSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsListPathParams;
    queryParams: DialogflowProjectsLocationsConversationsListQueryParams;
    security: DialogflowProjectsLocationsConversationsListSecurity;
}
export declare class DialogflowProjectsLocationsConversationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2ListConversationsResponse?: shared.GoogleCloudDialogflowV2ListConversationsResponse;
    statusCode: number;
}
