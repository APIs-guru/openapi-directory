import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentPathParams extends SpeakeasyBase {
    participant: string;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentPathParams;
    queryParams: DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentQueryParams;
    request?: shared.GoogleCloudDialogflowV2AnalyzeContentRequest;
    security: DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentSecurity;
}
export declare class DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2AnalyzeContentResponse?: shared.GoogleCloudDialogflowV2AnalyzeContentResponse;
    statusCode: number;
}
