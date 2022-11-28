import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesZonesListQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesZonesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesListPathParams;
    queryParams: DataplexProjectsLocationsLakesZonesListQueryParams;
    security: DataplexProjectsLocationsLakesZonesListSecurity;
}
export declare class DataplexProjectsLocationsLakesZonesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListZonesResponse?: shared.GoogleCloudDataplexV1ListZonesResponse;
    statusCode: number;
}
