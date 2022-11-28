import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsTestCasesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum DialogflowProjectsLocationsAgentsTestCasesListViewEnum {
    TestCaseViewUnspecified = "TEST_CASE_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class DialogflowProjectsLocationsAgentsTestCasesListQueryParams extends SpeakeasyBase {
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
    view?: DialogflowProjectsLocationsAgentsTestCasesListViewEnum;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsTestCasesListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsTestCasesListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsTestCasesListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsTestCasesListQueryParams;
    security: DialogflowProjectsLocationsAgentsTestCasesListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3ListTestCasesResponse?: shared.GoogleCloudDialogflowCxV3ListTestCasesResponse;
    statusCode: number;
}
