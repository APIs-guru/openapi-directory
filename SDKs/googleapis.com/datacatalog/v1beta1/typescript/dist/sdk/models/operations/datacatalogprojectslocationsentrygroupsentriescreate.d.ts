import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    entryId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesCreateRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsEntryGroupsEntriesCreatePathParams;
    queryParams: DatacatalogProjectsLocationsEntryGroupsEntriesCreateQueryParams;
    request?: shared.GoogleCloudDatacatalogV1beta1EntryInput;
    security: DatacatalogProjectsLocationsEntryGroupsEntriesCreateSecurity;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1beta1Entry?: shared.GoogleCloudDatacatalogV1beta1Entry;
    statusCode: number;
}
