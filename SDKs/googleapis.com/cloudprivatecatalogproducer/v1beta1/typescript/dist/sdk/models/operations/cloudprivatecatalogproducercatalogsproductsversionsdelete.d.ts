import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsDeleteRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsProductsVersionsDeletePathParams;
    queryParams: CloudprivatecatalogproducerCatalogsProductsVersionsDeleteQueryParams;
    security: CloudprivatecatalogproducerCatalogsProductsVersionsDeleteSecurity;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
