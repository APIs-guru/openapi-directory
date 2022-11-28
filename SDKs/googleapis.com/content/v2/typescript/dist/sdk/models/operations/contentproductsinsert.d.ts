import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentProductsInsertPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentProductsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dryRun?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentProductsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentProductsInsertRequest extends SpeakeasyBase {
    pathParams: ContentProductsInsertPathParams;
    queryParams: ContentProductsInsertQueryParams;
    request?: shared.Product;
    security: ContentProductsInsertSecurity;
}
export declare class ContentProductsInsertResponse extends SpeakeasyBase {
    contentType: string;
    product?: shared.Product;
    statusCode: number;
}
