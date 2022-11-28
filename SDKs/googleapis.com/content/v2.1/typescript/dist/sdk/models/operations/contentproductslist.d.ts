import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentProductsListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentProductsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentProductsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentProductsListRequest extends SpeakeasyBase {
    pathParams: ContentProductsListPathParams;
    queryParams: ContentProductsListQueryParams;
    security: ContentProductsListSecurity;
}
export declare class ContentProductsListResponse extends SpeakeasyBase {
    contentType: string;
    productsListResponse?: shared.ProductsListResponse;
    statusCode: number;
}
