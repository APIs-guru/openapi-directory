import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    conversationId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsConversationsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsCreatePathParams;
    queryParams: DialogflowProjectsLocationsConversationsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2ConversationInput;
    security: DialogflowProjectsLocationsConversationsCreateSecurity;
}
export declare class DialogflowProjectsLocationsConversationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2Conversation?: shared.GoogleCloudDialogflowV2Conversation;
    statusCode: number;
}
