import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentPromotionsGetPathParams extends SpeakeasyBase {
    id: string;
    merchantId: string;
}
export declare class ContentPromotionsGetQueryParams extends SpeakeasyBase {
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
export declare class ContentPromotionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentPromotionsGetRequest extends SpeakeasyBase {
    pathParams: ContentPromotionsGetPathParams;
    queryParams: ContentPromotionsGetQueryParams;
    security: ContentPromotionsGetSecurity;
}
export declare class ContentPromotionsGetResponse extends SpeakeasyBase {
    contentType: string;
    promotion?: shared.Promotion;
    statusCode: number;
}
