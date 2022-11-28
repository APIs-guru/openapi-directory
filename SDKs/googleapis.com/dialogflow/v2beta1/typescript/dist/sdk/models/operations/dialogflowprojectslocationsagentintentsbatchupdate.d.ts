import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentIntentsBatchUpdatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentIntentsBatchUpdatePathParams;
    queryParams: DialogflowProjectsLocationsAgentIntentsBatchUpdateQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput;
    security: DialogflowProjectsLocationsAgentIntentsBatchUpdateSecurity;
}
export declare class DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
