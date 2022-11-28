import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesAssetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsListQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesZonesAssetsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesAssetsListPathParams;
    queryParams: DataplexProjectsLocationsLakesZonesAssetsListQueryParams;
    security: DataplexProjectsLocationsLakesZonesAssetsListSecurity;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListAssetsResponse?: shared.GoogleCloudDataplexV1ListAssetsResponse;
    statusCode: number;
}
