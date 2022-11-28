import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsCreateRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsProductsVersionsCreatePathParams;
    queryParams: CloudprivatecatalogproducerCatalogsProductsVersionsCreateQueryParams;
    request?: shared.GoogleCloudPrivatecatalogproducerV1beta1Version;
    security: CloudprivatecatalogproducerCatalogsProductsVersionsCreateSecurity;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
