import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesPathParams;
    queryParams: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1SuggestArticlesRequest;
    security: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesSecurity;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1SuggestArticlesResponse?: shared.GoogleCloudDialogflowV2beta1SuggestArticlesResponse;
    statusCode: number;
}
