import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentImportQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentImportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentImportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentImportSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentImportSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentImportSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentImportRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentImportPathParams;
    queryParams: DialogflowProjectsLocationsAgentImportQueryParams;
    request?: shared.GoogleCloudDialogflowV2beta1ImportAgentRequest;
    security: DialogflowProjectsLocationsAgentImportSecurity;
}
export declare class DialogflowProjectsLocationsAgentImportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
