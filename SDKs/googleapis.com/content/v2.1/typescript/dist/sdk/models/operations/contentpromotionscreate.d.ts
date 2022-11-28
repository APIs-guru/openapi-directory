import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentPromotionsCreatePathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentPromotionsCreateQueryParams extends SpeakeasyBase {
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
export declare class ContentPromotionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentPromotionsCreateRequest extends SpeakeasyBase {
    pathParams: ContentPromotionsCreatePathParams;
    queryParams: ContentPromotionsCreateQueryParams;
    request?: shared.PromotionInput;
    security: ContentPromotionsCreateSecurity;
}
export declare class ContentPromotionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    promotion?: shared.Promotion;
    statusCode: number;
}
