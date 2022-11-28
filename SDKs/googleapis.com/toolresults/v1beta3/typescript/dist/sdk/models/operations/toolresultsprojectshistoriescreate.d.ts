import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesCreatePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class ToolresultsProjectsHistoriesCreateQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesCreateRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesCreatePathParams;
    queryParams: ToolresultsProjectsHistoriesCreateQueryParams;
    request?: shared.History;
    security: ToolresultsProjectsHistoriesCreateSecurity;
}
export declare class ToolresultsProjectsHistoriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    history?: shared.History;
    statusCode: number;
}
