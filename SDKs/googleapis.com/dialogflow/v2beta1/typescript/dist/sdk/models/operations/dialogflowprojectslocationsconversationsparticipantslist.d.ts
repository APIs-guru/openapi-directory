import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsParticipantsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsParticipantsListSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsParticipantsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsParticipantsListPathParams;
    queryParams: DialogflowProjectsLocationsConversationsParticipantsListQueryParams;
    security: DialogflowProjectsLocationsConversationsParticipantsListSecurity;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1ListParticipantsResponse?: shared.GoogleCloudDialogflowV2beta1ListParticipantsResponse;
    statusCode: number;
}
