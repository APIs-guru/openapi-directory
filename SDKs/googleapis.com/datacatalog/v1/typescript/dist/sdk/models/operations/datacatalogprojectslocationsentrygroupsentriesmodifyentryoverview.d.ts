import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewPathParams;
    queryParams: DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewQueryParams;
    request?: shared.GoogleCloudDatacatalogV1ModifyEntryOverviewRequest;
    security: DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewSecurity;
}
export declare class DatacatalogProjectsLocationsEntryGroupsEntriesModifyEntryOverviewResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1EntryOverview?: shared.GoogleCloudDatacatalogV1EntryOverview;
    statusCode: number;
}
