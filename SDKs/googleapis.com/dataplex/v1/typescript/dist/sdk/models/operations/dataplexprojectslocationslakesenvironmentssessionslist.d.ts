import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesEnvironmentsSessionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesEnvironmentsSessionsListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesEnvironmentsSessionsListPathParams;
    queryParams: DataplexProjectsLocationsLakesEnvironmentsSessionsListQueryParams;
    security: DataplexProjectsLocationsLakesEnvironmentsSessionsListSecurity;
}
export declare class DataplexProjectsLocationsLakesEnvironmentsSessionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListSessionsResponse?: shared.GoogleCloudDataplexV1ListSessionsResponse;
    statusCode: number;
}
