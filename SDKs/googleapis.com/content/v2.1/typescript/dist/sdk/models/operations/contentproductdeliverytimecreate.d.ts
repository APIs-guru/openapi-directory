import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentProductdeliverytimeCreatePathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentProductdeliverytimeCreateQueryParams extends SpeakeasyBase {
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
export declare class ContentProductdeliverytimeCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentProductdeliverytimeCreateRequest extends SpeakeasyBase {
    pathParams: ContentProductdeliverytimeCreatePathParams;
    queryParams: ContentProductdeliverytimeCreateQueryParams;
    request?: shared.ProductDeliveryTime;
    security: ContentProductdeliverytimeCreateSecurity;
}
export declare class ContentProductdeliverytimeCreateResponse extends SpeakeasyBase {
    contentType: string;
    productDeliveryTime?: shared.ProductDeliveryTime;
    statusCode: number;
}
