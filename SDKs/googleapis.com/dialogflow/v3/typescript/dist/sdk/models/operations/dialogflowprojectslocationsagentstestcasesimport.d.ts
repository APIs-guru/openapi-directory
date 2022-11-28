import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsTestCasesImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesImportQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesImportSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsTestCasesImportSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesImportRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsTestCasesImportPathParams;
    queryParams: DialogflowProjectsLocationsAgentsTestCasesImportQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3ImportTestCasesRequest;
    security: DialogflowProjectsLocationsAgentsTestCasesImportSecurity;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesImportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
