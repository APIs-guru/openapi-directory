import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentShoppingadsprogramRequestreviewPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentShoppingadsprogramRequestreviewQueryParams extends SpeakeasyBase {
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
export declare class ContentShoppingadsprogramRequestreviewSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentShoppingadsprogramRequestreviewRequest extends SpeakeasyBase {
    pathParams: ContentShoppingadsprogramRequestreviewPathParams;
    queryParams: ContentShoppingadsprogramRequestreviewQueryParams;
    request?: shared.RequestReviewShoppingAdsRequest;
    security: ContentShoppingadsprogramRequestreviewSecurity;
}
export declare class ContentShoppingadsprogramRequestreviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
