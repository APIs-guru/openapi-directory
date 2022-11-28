import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersPathParams;
    queryParams: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1SuggestFaqAnswersRequest;
    security: DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersSecurity;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1SuggestFaqAnswersResponse?: shared.GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse;
    statusCode: number;
}
