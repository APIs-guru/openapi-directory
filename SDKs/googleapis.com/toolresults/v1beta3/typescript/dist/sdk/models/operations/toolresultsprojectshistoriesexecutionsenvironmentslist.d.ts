import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsEnvironmentsListPathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsEnvironmentsListQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsEnvironmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsEnvironmentsListRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsEnvironmentsListPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsEnvironmentsListQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsEnvironmentsListSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsEnvironmentsListResponse extends SpeakeasyBase {
    contentType: string;
    listEnvironmentsResponse?: shared.ListEnvironmentsResponse;
    statusCode: number;
}
