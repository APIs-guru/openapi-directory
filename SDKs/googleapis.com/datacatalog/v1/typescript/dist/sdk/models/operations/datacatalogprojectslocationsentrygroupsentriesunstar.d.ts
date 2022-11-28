import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesUnstarPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesUnstarQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesUnstarSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesUnstarRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsEntryGroupsEntriesUnstarPathParams;
    queryParams: DatacatalogProjectsLocationsEntryGroupsEntriesUnstarQueryParams;
    request?: Map<string, any>;
    security: DatacatalogProjectsLocationsEntryGroupsEntriesUnstarSecurity;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesUnstarResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1UnstarEntryResponse?: Map<string, any>;
    statusCode: number;
}
