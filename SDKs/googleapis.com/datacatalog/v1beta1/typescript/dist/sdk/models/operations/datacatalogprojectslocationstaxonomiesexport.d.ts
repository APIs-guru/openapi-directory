import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesExportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesExportQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serializedTaxonomies?: boolean;
    taxonomies?: string[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesExportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesExportRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesExportPathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesExportQueryParams;
    security: DatacatalogProjectsLocationsTaxonomiesExportSecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesExportResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1beta1ExportTaxonomiesResponse?: shared.GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse;
    statusCode: number;
}
