import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
    stepId: string;
}
export declare enum ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum {
    PerfMetricTypeUnspecified = "perfMetricTypeUnspecified",
    Memory = "memory",
    Cpu = "cpu",
    Network = "network",
    Graphics = "graphics"
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListFilterEnum[];
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesListResponse extends SpeakeasyBase {
    contentType: string;
    listPerfSampleSeriesResponse?: shared.ListPerfSampleSeriesResponse;
    statusCode: number;
}
