import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesStarPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesStarRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsEntryGroupsEntriesStarPathParams;
    queryParams: DatacatalogProjectsLocationsEntryGroupsEntriesStarQueryParams;
    request?: Map<string, any>;
    security: DatacatalogProjectsLocationsEntryGroupsEntriesStarSecurity;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesStarResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1StarEntryResponse?: Map<string, any>;
    statusCode: number;
}
