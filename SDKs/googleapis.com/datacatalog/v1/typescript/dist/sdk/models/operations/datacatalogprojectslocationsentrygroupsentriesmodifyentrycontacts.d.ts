import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsPathParams;
    queryParams: DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsQueryParams;
    request?: shared.GoogleCloudDatacatalogV1ModifyEntryContactsRequest;
    security: DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsSecurity;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryContactsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1Contacts?: shared.GoogleCloudDatacatalogV1Contacts;
    statusCode: number;
}
