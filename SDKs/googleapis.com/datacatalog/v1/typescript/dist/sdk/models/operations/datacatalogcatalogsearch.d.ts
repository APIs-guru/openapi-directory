import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogCatalogSearchQueryParams extends SpeakeasyBase {
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
export declare class DatacatalogCatalogSearchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogCatalogSearchRequest extends SpeakeasyBase {
    queryParams: DatacatalogCatalogSearchQueryParams;
    request?: shared.GoogleCloudDatacatalogV1SearchCatalogRequest;
    security: DatacatalogCatalogSearchSecurity;
}
export declare class DatacatalogCatalogSearchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1SearchCatalogResponse?: shared.GoogleCloudDatacatalogV1SearchCatalogResponse;
    statusCode: number;
}
