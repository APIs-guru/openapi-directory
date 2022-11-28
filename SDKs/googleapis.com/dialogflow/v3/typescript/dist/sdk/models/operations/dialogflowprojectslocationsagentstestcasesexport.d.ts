import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsTestCasesExportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesExportQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsTestCasesExportSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesExportSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesExportSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsTestCasesExportSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsTestCasesExportSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesExportRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsTestCasesExportPathParams;
    queryParams: DialogflowProjectsLocationsAgentsTestCasesExportQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3ExportTestCasesRequest;
    security: DialogflowProjectsLocationsAgentsTestCasesExportSecurity;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesExportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
