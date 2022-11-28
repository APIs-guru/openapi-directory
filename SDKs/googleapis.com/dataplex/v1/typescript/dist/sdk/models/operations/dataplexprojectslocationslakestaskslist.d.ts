import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesTasksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesTasksListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataplexProjectsLocationsLakesTasksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesTasksListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesTasksListPathParams;
    queryParams: DataplexProjectsLocationsLakesTasksListQueryParams;
    security: DataplexProjectsLocationsLakesTasksListSecurity;
}
export declare class DataplexProjectsLocationsLakesTasksListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListTasksResponse?: shared.GoogleCloudDataplexV1ListTasksResponse;
    statusCode: number;
}
