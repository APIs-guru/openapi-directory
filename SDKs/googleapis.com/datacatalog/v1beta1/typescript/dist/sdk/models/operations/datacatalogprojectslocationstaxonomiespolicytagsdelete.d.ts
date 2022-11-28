import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeletePathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteQueryParams;
    security: DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteSecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesPolicyTagsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
