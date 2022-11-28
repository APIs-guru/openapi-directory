import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentProductdeliverytimeGetPathParams extends SpeakeasyBase {
    merchantId: string;
    productId: string;
}
export declare class ContentProductdeliverytimeGetQueryParams extends SpeakeasyBase {
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
export declare class ContentProductdeliverytimeGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentProductdeliverytimeGetRequest extends SpeakeasyBase {
    pathParams: ContentProductdeliverytimeGetPathParams;
    queryParams: ContentProductdeliverytimeGetQueryParams;
    security: ContentProductdeliverytimeGetSecurity;
}
export declare class ContentProductdeliverytimeGetResponse extends SpeakeasyBase {
    contentType: string;
    productDeliveryTime?: shared.ProductDeliveryTime;
    statusCode: number;
}
