import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
    stepId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreatePathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateQueryParams;
    request?: shared.PerfMetricsSummary;
    security: ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfMetricsSummaryCreateResponse extends SpeakeasyBase {
    contentType: string;
    perfMetricsSummary?: shared.PerfMetricsSummary;
    statusCode: number;
}
