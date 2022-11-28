import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsMessagesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationsMessagesListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationsMessagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsMessagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsMessagesListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsMessagesListSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsMessagesListSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsMessagesListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsMessagesListPathParams;
    queryParams: DialogflowProjectsLocationsConversationsMessagesListQueryParams;
    security: DialogflowProjectsLocationsConversationsMessagesListSecurity;
}
export declare class DialogflowProjectsLocationsConversationsMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1ListMessagesResponse?: shared.GoogleCloudDialogflowV2beta1ListMessagesResponse;
    statusCode: number;
}
