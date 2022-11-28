import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesListPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class ToolresultsProjectsHistoriesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filterByName?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ToolresultsProjectsHistoriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesListRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesListPathParams;
    queryParams: ToolresultsProjectsHistoriesListQueryParams;
    security: ToolresultsProjectsHistoriesListSecurity;
}
export declare class ToolresultsProjectsHistoriesListResponse extends SpeakeasyBase {
    contentType: string;
    listHistoriesResponse?: shared.ListHistoriesResponse;
    statusCode: number;
}
