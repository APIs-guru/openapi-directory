import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryPathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
    stepId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummarySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummarySecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsGetPerfMetricsSummaryResponse extends SpeakeasyBase {
    contentType: string;
    perfMetricsSummary?: shared.PerfMetricsSummary;
    statusCode: number;
}
