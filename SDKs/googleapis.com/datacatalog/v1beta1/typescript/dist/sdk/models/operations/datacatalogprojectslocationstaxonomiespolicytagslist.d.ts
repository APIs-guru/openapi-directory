import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsListQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsListRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsListPathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsListQueryParams;
    security: DatacatalogProjectsLocationsTaxonomiesPolicyTagsListSecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1beta1ListPolicyTagsResponse?: shared.GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse;
    statusCode: number;
}
