import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesListQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesListPathParams;
    queryParams: DataplexProjectsLocationsLakesListQueryParams;
    security: DataplexProjectsLocationsLakesListSecurity;
}
export declare class DataplexProjectsLocationsLakesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListLakesResponse?: shared.GoogleCloudDataplexV1ListLakesResponse;
    statusCode: number;
}
