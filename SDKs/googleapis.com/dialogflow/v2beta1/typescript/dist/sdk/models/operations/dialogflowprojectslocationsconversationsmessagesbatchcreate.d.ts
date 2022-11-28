import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationsMessagesBatchCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationsMessagesBatchCreatePathParams;
    queryParams: DialogflowProjectsLocationsConversationsMessagesBatchCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1BatchCreateMessagesRequestInput;
    security: DialogflowProjectsLocationsConversationsMessagesBatchCreateSecurity;
}
export declare class DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1BatchCreateMessagesResponse?: shared.GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse;
    statusCode: number;
}
