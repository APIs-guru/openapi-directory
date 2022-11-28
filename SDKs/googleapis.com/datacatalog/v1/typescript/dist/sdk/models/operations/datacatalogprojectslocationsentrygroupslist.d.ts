import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsEntryGroupsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsListQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsEntryGroupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsEntryGroupsListRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsEntryGroupsListPathParams;
    queryParams: DatacatalogProjectsLocationsEntryGroupsListQueryParams;
    security: DatacatalogProjectsLocationsEntryGroupsListSecurity;
}
export declare class DatacatalogProjectsLocationsEntryGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1ListEntryGroupsResponse?: shared.GoogleCloudDatacatalogV1ListEntryGroupsResponse;
    statusCode: number;
}
