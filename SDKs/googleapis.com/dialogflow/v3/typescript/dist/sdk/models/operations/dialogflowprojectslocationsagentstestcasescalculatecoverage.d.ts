import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams extends SpeakeasyBase {
    agent: string;
}
export declare enum DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum {
    CoverageTypeUnspecified = "COVERAGE_TYPE_UNSPECIFIED",
    Intent = "INTENT",
    PageTransition = "PAGE_TRANSITION",
    TransitionRouteGroup = "TRANSITION_ROUTE_GROUP"
}
export declare class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    type?: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsTestCasesCalculateCoveragePathParams;
    queryParams: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageQueryParams;
    security: DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageSecurity;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3CalculateCoverageResponse?: shared.GoogleCloudDialogflowCxV3CalculateCoverageResponse;
    statusCode: number;
}
