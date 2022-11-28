import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrderreturnsGetPathParams extends SpeakeasyBase {
    merchantId: string;
    returnId: string;
}
export declare class ContentOrderreturnsGetQueryParams extends SpeakeasyBase {
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
export declare class ContentOrderreturnsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrderreturnsGetRequest extends SpeakeasyBase {
    pathParams: ContentOrderreturnsGetPathParams;
    queryParams: ContentOrderreturnsGetQueryParams;
    security: ContentOrderreturnsGetSecurity;
}
export declare class ContentOrderreturnsGetResponse extends SpeakeasyBase {
    contentType: string;
    merchantOrderReturn?: shared.MerchantOrderReturn;
    statusCode: number;
}
