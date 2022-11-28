import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsClustersListPathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsClustersListQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsClustersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsClustersListRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsClustersListPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsClustersListQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsClustersListSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsClustersListResponse extends SpeakeasyBase {
    contentType: string;
    listScreenshotClustersResponse?: shared.ListScreenshotClustersResponse;
    statusCode: number;
}
