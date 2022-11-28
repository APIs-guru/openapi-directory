import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesEntitiesPartitionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesPartitionsListQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesZonesEntitiesPartitionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesPartitionsListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesEntitiesPartitionsListPathParams;
    queryParams: DataplexProjectsLocationsLakesZonesEntitiesPartitionsListQueryParams;
    security: DataplexProjectsLocationsLakesZonesEntitiesPartitionsListSecurity;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesPartitionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListPartitionsResponse?: shared.GoogleCloudDataplexV1ListPartitionsResponse;
    statusCode: number;
}
