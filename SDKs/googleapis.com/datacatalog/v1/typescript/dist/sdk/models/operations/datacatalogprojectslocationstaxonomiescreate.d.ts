import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesCreateQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsTaxonomiesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesCreateRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesCreatePathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesCreateQueryParams;
    request?: shared.GoogleCloudDatacatalogV1TaxonomyInput;
    security: DatacatalogProjectsLocationsTaxonomiesCreateSecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1Taxonomy?: shared.GoogleCloudDatacatalogV1Taxonomy;
    statusCode: number;
}
