import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesReplacePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesReplaceQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsTaxonomiesReplaceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesReplaceRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesReplacePathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesReplaceQueryParams;
    request?: shared.GoogleCloudDatacatalogV1ReplaceTaxonomyRequest;
    security: DatacatalogProjectsLocationsTaxonomiesReplaceSecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesReplaceResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1Taxonomy?: shared.GoogleCloudDatacatalogV1Taxonomy;
    statusCode: number;
}
