import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesEnvironmentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesEnvironmentsListQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesEnvironmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesEnvironmentsListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesEnvironmentsListPathParams;
    queryParams: DataplexProjectsLocationsLakesEnvironmentsListQueryParams;
    security: DataplexProjectsLocationsLakesEnvironmentsListSecurity;
}
export declare class DataplexProjectsLocationsLakesEnvironmentsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListEnvironmentsResponse?: shared.GoogleCloudDataplexV1ListEnvironmentsResponse;
    statusCode: number;
}
