import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesEntitiesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum DataplexProjectsLocationsLakesZonesEntitiesListViewEnum {
    EntityViewUnspecified = "ENTITY_VIEW_UNSPECIFIED",
    Tables = "TABLES",
    Filesets = "FILESETS"
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesListQueryParams extends SpeakeasyBase {
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
    view?: DataplexProjectsLocationsLakesZonesEntitiesListViewEnum;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesEntitiesListPathParams;
    queryParams: DataplexProjectsLocationsLakesZonesEntitiesListQueryParams;
    security: DataplexProjectsLocationsLakesZonesEntitiesListSecurity;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListEntitiesResponse?: shared.GoogleCloudDataplexV1ListEntitiesResponse;
    statusCode: number;
}
