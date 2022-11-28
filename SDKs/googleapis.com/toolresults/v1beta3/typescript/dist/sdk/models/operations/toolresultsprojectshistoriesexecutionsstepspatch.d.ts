import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsPatchPathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
    stepId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPatchQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsStepsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPatchRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsPatchPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsPatchQueryParams;
    request?: shared.Step;
    security: ToolresultsProjectsHistoriesExecutionsStepsPatchSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    step?: shared.Step;
}
