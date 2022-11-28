import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsListPathParams extends SpeakeasyBase {
    historyId: string;
    projectId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsListQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsListRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsListPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsListQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsListSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsListResponse extends SpeakeasyBase {
    contentType: string;
    listExecutionsResponse?: shared.ListExecutionsResponse;
    statusCode: number;
}
