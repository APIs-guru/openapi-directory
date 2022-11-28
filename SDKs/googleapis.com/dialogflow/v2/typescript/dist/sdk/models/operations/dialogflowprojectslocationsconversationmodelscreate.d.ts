import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationModelsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationModelsCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationModelsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationModelsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationModelsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationModelsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationModelsCreatePathParams;
    queryParams: DialogflowProjectsLocationsConversationModelsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2ConversationModelInput;
    security: DialogflowProjectsLocationsConversationModelsCreateSecurity;
}
export declare class DialogflowProjectsLocationsConversationModelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
