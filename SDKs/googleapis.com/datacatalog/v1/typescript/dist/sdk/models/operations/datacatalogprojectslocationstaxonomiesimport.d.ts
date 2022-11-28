import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesImportQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsTaxonomiesImportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesImportRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesImportPathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesImportQueryParams;
    request?: shared.GoogleCloudDatacatalogV1ImportTaxonomiesRequest;
    security: DatacatalogProjectsLocationsTaxonomiesImportSecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesImportResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1ImportTaxonomiesResponse?: shared.GoogleCloudDatacatalogV1ImportTaxonomiesResponse;
    statusCode: number;
}
