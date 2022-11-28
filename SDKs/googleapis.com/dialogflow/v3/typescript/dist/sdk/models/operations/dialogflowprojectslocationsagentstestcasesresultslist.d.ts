import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsTestCasesResultsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesResultsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesResultsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesResultsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesResultsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsTestCasesResultsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsTestCasesResultsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesResultsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsTestCasesResultsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsTestCasesResultsListQueryParams;
    security: DialogflowProjectsLocationsAgentsTestCasesResultsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesResultsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3ListTestCaseResultsResponse?: shared.GoogleCloudDialogflowCxV3ListTestCaseResultsResponse;
    statusCode: number;
}
