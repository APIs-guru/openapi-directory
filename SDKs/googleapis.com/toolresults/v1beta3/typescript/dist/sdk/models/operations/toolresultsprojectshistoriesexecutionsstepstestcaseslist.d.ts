import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsTestCasesListPathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
    stepId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsTestCasesListQueryParams extends SpeakeasyBase {
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
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsTestCasesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsTestCasesListRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsTestCasesListPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsTestCasesListQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsStepsTestCasesListSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsTestCasesListResponse extends SpeakeasyBase {
    contentType: string;
    listTestCasesResponse?: shared.ListTestCasesResponse;
    statusCode: number;
}
