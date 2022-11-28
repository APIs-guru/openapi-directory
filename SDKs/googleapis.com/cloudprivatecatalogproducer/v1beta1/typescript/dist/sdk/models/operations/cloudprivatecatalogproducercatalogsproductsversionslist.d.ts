import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams extends SpeakeasyBase {
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
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsListRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsProductsVersionsListPathParams;
    queryParams: CloudprivatecatalogproducerCatalogsProductsVersionsListQueryParams;
    security: CloudprivatecatalogproducerCatalogsProductsVersionsListSecurity;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
