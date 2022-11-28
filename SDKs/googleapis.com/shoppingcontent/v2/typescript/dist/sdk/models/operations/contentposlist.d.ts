import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentPosListPathParams extends SpeakeasyBase {
    merchantId: string;
    targetMerchantId: string;
}
export declare class ContentPosListQueryParams extends SpeakeasyBase {
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
export declare class ContentPosListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentPosListRequest extends SpeakeasyBase {
    pathParams: ContentPosListPathParams;
    queryParams: ContentPosListQueryParams;
    security: ContentPosListSecurity;
}
export declare class ContentPosListResponse extends SpeakeasyBase {
    contentType: string;
    posListResponse?: shared.PosListResponse;
    statusCode: number;
}
