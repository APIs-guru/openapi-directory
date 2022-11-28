import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesAssetsActionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsActionsListQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesZonesAssetsActionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsActionsListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesAssetsActionsListPathParams;
    queryParams: DataplexProjectsLocationsLakesZonesAssetsActionsListQueryParams;
    security: DataplexProjectsLocationsLakesZonesAssetsActionsListSecurity;
}
export declare class DataplexProjectsLocationsLakesZonesAssetsActionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListActionsResponse?: shared.GoogleCloudDataplexV1ListActionsResponse;
    statusCode: number;
}
