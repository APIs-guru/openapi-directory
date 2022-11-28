import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams extends SpeakeasyBase {
    conversation: string;
}
export declare class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryPathParams;
    queryParams: DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1SuggestConversationSummaryRequest;
    security: DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummarySecurity;
}
export declare class DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1SuggestConversationSummaryResponse?: shared.GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse;
    statusCode: number;
}
