import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationDatasetsImportConversationDataPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationDatasetsImportConversationDataRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationDatasetsImportConversationDataPathParams;
    queryParams: DialogflowProjectsLocationsConversationDatasetsImportConversationDataQueryParams;
    request?: shared.GoogleCloudDialogflowV2ImportConversationDataRequest;
    security: DialogflowProjectsLocationsConversationDatasetsImportConversationDataSecurity;
}
export declare class DialogflowProjectsLocationsConversationDatasetsImportConversationDataResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
