import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1;
    option2?: DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption2;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsConversationsParticipantsSuggestionsCompilePathParams;
    queryParams: DialogflowProjectsConversationsParticipantsSuggestionsCompileQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1CompileSuggestionRequest;
    security: DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity;
}
export declare class DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1CompileSuggestionResponse?: shared.GoogleCloudDialogflowV2beta1CompileSuggestionResponse;
    statusCode: number;
}
