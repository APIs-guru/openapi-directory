import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationModelsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationModelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsConversationModelsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationModelsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationModelsListSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationModelsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationModelsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationModelsListPathParams;
    queryParams: DialogflowProjectsLocationsConversationModelsListQueryParams;
    security: DialogflowProjectsLocationsConversationModelsListSecurity;
}
export declare class DialogflowProjectsLocationsConversationModelsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2ListConversationModelsResponse?: shared.GoogleCloudDialogflowV2ListConversationModelsResponse;
    statusCode: number;
}
