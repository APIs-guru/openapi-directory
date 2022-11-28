import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsCompletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsConversationsCompleteQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationsCompleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsCompleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsCompleteSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsCompleteSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsCompleteSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsCompleteRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsCompletePathParams;
    queryParams: DialogflowProjectsLocationsConversationsCompleteQueryParams;
    request?: Map<string, any>;
    security: DialogflowProjectsLocationsConversationsCompleteSecurity;
}
export declare class DialogflowProjectsLocationsConversationsCompleteResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2Conversation?: shared.GoogleCloudDialogflowV2Conversation;
    statusCode: number;
}
