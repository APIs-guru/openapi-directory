import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogProjectsLocationsTaxonomiesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatacatalogProjectsLocationsTaxonomiesListQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogProjectsLocationsTaxonomiesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogProjectsLocationsTaxonomiesListRequest extends SpeakeasyBase {
    pathParams: DatacatalogProjectsLocationsTaxonomiesListPathParams;
    queryParams: DatacatalogProjectsLocationsTaxonomiesListQueryParams;
    security: DatacatalogProjectsLocationsTaxonomiesListSecurity;
}
export declare class DatacatalogProjectsLocationsTaxonomiesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1beta1ListTaxonomiesResponse?: shared.GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse;
    statusCode: number;
}
