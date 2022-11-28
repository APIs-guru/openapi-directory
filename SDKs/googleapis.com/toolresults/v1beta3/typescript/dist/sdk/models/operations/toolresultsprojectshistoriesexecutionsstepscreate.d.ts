import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsCreatePathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsCreateQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsStepsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsCreateRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsCreatePathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsCreateQueryParams;
    request?: shared.Step;
    security: ToolresultsProjectsHistoriesExecutionsStepsCreateSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    step?: shared.Step;
}
