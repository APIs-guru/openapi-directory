import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationDatasetsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationDatasetsCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationDatasetsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationDatasetsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationDatasetsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationDatasetsCreatePathParams;
    queryParams: DialogflowProjectsLocationsConversationDatasetsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowV2ConversationDatasetInput;
    security: DialogflowProjectsLocationsConversationDatasetsCreateSecurity;
}
export declare class DialogflowProjectsLocationsConversationDatasetsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
