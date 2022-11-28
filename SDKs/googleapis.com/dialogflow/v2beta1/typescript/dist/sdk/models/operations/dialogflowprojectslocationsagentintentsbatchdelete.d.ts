import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentIntentsBatchDeletePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentIntentsBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentIntentsBatchDeletePathParams;
    queryParams: DialogflowProjectsLocationsAgentIntentsBatchDeleteQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1BatchDeleteIntentsRequestInput;
    security: DialogflowProjectsLocationsAgentIntentsBatchDeleteSecurity;
}
export declare class DialogflowProjectsLocationsAgentIntentsBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
