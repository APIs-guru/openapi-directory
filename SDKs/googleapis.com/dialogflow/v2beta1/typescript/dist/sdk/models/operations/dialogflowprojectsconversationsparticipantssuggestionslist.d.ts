import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption1;
    option2?: DialogflowProjectsConversationsParticipantsSuggestionsListSecurityOption2;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsConversationsParticipantsSuggestionsListPathParams;
    queryParams: DialogflowProjectsConversationsParticipantsSuggestionsListQueryParams;
    security: DialogflowProjectsConversationsParticipantsSuggestionsListSecurity;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1ListSuggestionsResponse?: shared.GoogleCloudDialogflowV2beta1ListSuggestionsResponse;
    statusCode: number;
}
