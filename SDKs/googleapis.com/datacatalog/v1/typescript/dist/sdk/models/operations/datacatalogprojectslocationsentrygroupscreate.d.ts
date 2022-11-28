import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsEntryGroupsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    entryGroupId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsEntryGroupsCreateRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsEntryGroupsCreatePathParams;
    queryParams: DatacatalogProjectsLocationsEntryGroupsCreateQueryParams;
    request?: shared.GoogleCloudDatacatalogV1EntryGroupInput;
    security: DatacatalogProjectsLocationsEntryGroupsCreateSecurity;
}
export declare class DatacatalogProjectsLocationsEntryGroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1EntryGroup?: shared.GoogleCloudDatacatalogV1EntryGroup;
    statusCode: number;
}
