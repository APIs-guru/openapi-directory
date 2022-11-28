import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentProductsDeletePathParams extends SpeakeasyBase {
    merchantId: string;
    productId: string;
}
export declare class ContentProductsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    feedId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentProductsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentProductsDeleteRequest extends SpeakeasyBase {
    pathParams: ContentProductsDeletePathParams;
    queryParams: ContentProductsDeleteQueryParams;
    security: ContentProductsDeleteSecurity;
}
export declare class ContentProductsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
