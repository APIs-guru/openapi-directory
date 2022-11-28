import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetPathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetQueryParams;
    security: DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetSecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1PolicyTag?: shared.GoogleCloudDatacatalogV1PolicyTag;
    statusCode: number;
}
