import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsGetPathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
    stepId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsGetQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsStepsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsGetRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsGetPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsGetQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsStepsGetSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    step?: shared.Step;
}
