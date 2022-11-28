import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreatePathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
    sampleSeriesId: string;
    stepId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreatePathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateQueryParams;
    request?: shared.BatchCreatePerfSamplesRequest;
    security: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesBatchCreateResponse extends SpeakeasyBase {
    batchCreatePerfSamplesResponse?: shared.BatchCreatePerfSamplesResponse;
    contentType: string;
    statusCode: number;
}
