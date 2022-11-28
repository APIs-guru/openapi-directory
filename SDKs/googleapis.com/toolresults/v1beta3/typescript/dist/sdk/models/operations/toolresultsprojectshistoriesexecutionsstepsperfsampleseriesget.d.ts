import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetPathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
    sampleSeriesId: string;
    stepId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesGetResponse extends SpeakeasyBase {
    contentType: string;
    perfSampleSeries?: shared.PerfSampleSeries;
    statusCode: number;
}
