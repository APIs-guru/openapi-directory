import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams extends SpeakeasyBase {
    product: string;
}
export declare class CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams extends SpeakeasyBase {
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
export declare class CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudprivatecatalogproducerCatalogsProductsIconsUploadRequest extends SpeakeasyBase {
    pathParams: CloudprivatecatalogproducerCatalogsProductsIconsUploadPathParams;
    queryParams: CloudprivatecatalogproducerCatalogsProductsIconsUploadQueryParams;
    request?: shared.GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest;
    security: CloudprivatecatalogproducerCatalogsProductsIconsUploadSecurity;
}
export declare class CloudprivatecatalogproducerCatalogsProductsIconsUploadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
