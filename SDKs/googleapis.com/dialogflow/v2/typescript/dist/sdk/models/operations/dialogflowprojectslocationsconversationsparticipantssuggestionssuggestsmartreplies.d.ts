import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesPathParams;
    queryParams: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesQueryParams;
    request?: shared.GoogleCloudDialogflowV2SuggestSmartRepliesRequest;
    security: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesSecurity;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2SuggestSmartRepliesResponse?: shared.GoogleCloudDialogflowV2SuggestSmartRepliesResponse;
    statusCode: number;
}
