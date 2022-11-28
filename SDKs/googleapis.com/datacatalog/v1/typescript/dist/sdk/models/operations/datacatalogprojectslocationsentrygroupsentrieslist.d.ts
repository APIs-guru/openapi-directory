import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams extends SpeakeasyBase {
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
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesListRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsEntryGroupsEntriesListPathParams;
    queryParams: DatacatalogProjectsLocationsEntryGroupsEntriesListQueryParams;
    security: DatacatalogProjectsLocationsEntryGroupsEntriesListSecurity;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1ListEntriesResponse?: shared.GoogleCloudDatacatalogV1ListEntriesResponse;
    statusCode: number;
}
