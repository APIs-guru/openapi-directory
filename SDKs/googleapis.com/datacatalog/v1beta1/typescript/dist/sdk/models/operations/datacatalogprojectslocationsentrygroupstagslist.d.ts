import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsEntryGroupsTagsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsTagsListQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsEntryGroupsTagsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsEntryGroupsTagsListRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsEntryGroupsTagsListPathParams;
    queryParams: DatacatalogProjectsLocationsEntryGroupsTagsListQueryParams;
    security: DatacatalogProjectsLocationsEntryGroupsTagsListSecurity;
}
export declare class DatacatalogProjectsLocationsEntryGroupsTagsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1beta1ListTagsResponse?: shared.GoogleCloudDatacatalogV1beta1ListTagsResponse;
    statusCode: number;
}
