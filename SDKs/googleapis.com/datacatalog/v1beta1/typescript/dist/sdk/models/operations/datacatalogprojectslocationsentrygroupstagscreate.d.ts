import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsEntryGroupsTagsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsEntryGroupsTagsCreateRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsEntryGroupsTagsCreatePathParams;
    queryParams: DatacatalogProjectsLocationsEntryGroupsTagsCreateQueryParams;
    request?: shared.GoogleCloudDatacatalogV1beta1TagInput;
    security: DatacatalogProjectsLocationsEntryGroupsTagsCreateSecurity;
}
export declare class DatacatalogProjectsLocationsEntryGroupsTagsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1beta1Tag?: shared.GoogleCloudDatacatalogV1beta1Tag;
    statusCode: number;
}
