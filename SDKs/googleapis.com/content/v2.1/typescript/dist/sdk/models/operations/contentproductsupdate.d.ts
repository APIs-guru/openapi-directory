import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentProductsUpdatePathParams extends SpeakeasyBase {
    merchantId: string;
    productId: string;
}
export declare class ContentProductsUpdateQueryParams extends SpeakeasyBase {
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
export declare class ContentProductsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentProductsUpdateRequest extends SpeakeasyBase {
    pathParams: ContentProductsUpdatePathParams;
    queryParams: ContentProductsUpdateQueryParams;
    request?: shared.Product;
    security: ContentProductsUpdateSecurity;
}
export declare class ContentProductsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    product?: shared.Product;
    statusCode: number;
}
