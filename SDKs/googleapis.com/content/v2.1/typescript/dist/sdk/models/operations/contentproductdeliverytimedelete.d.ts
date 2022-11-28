import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentProductdeliverytimeDeletePathParams extends SpeakeasyBase {
    merchantId: string;
    productId: string;
}
export declare class ContentProductdeliverytimeDeleteQueryParams extends SpeakeasyBase {
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
export declare class ContentProductdeliverytimeDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentProductdeliverytimeDeleteRequest extends SpeakeasyBase {
    pathParams: ContentProductdeliverytimeDeletePathParams;
    queryParams: ContentProductdeliverytimeDeleteQueryParams;
    security: ContentProductdeliverytimeDeleteSecurity;
}
export declare class ContentProductdeliverytimeDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
