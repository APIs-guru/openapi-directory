import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsPatchRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsProductsVersionsPatchPathParams;
    queryParams: CloudprivatecatalogproducerCatalogsProductsVersionsPatchQueryParams;
    request?: shared.GoogleCloudPrivatecatalogproducerV1beta1Version;
    security: CloudprivatecatalogproducerCatalogsProductsVersionsPatchSecurity;
}
export declare class CloudprivatecatalogproducerCatalogsProductsVersionsPatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
