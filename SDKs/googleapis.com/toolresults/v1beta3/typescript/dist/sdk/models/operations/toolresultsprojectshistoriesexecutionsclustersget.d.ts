import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsClustersGetPathParams extends SpeakeasyBase {
    clusterId: string;
    executionId: string;
    historyId: string;
    projectId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsClustersGetQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsClustersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsClustersGetRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsClustersGetPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsClustersGetQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsClustersGetSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsClustersGetResponse extends SpeakeasyBase {
    contentType: string;
    screenshotCluster?: shared.ScreenshotCluster;
    statusCode: number;
}
