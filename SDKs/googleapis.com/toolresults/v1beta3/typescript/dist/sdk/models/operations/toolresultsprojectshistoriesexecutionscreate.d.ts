import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsCreatePathParams extends SpeakeasyBase {
    historyId: string;
    projectId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsCreateQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsCreateRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsCreatePathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsCreateQueryParams;
    request?: shared.Execution;
    security: ToolresultsProjectsHistoriesExecutionsCreateSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    execution?: shared.Execution;
    statusCode: number;
}
