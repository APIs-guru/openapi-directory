import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
    sampleSeriesId: string;
    stepId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPerfSampleSeriesSamplesListResponse extends SpeakeasyBase {
    contentType: string;
    listPerfSamplesResponse?: shared.ListPerfSamplesResponse;
    statusCode: number;
}
