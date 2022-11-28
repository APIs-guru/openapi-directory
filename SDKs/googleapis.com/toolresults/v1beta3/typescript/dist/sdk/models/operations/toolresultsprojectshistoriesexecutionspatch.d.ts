import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsPatchPathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsPatchRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsPatchPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsPatchQueryParams;
    request?: shared.Execution;
    security: ToolresultsProjectsHistoriesExecutionsPatchSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    execution?: shared.Execution;
    statusCode: number;
}
