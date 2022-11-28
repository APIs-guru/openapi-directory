import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreatePathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
    stepId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreatePathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateQueryParams;
    request?: shared.PerfSampleSeries;
    security: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    perfSampleSeries?: shared.PerfSampleSeries;
    statusCode: number;
}
