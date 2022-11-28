import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentPosSalePathParams extends SpeakeasyBase {
    merchantId: string;
    targetMerchantId: string;
}
export declare class ContentPosSaleQueryParams extends SpeakeasyBase {
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
export declare class ContentPosSaleSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentPosSaleRequest extends SpeakeasyBase {
    pathParams: ContentPosSalePathParams;
    queryParams: ContentPosSaleQueryParams;
    request?: shared.PosSaleRequest;
    security: ContentPosSaleSecurity;
}
export declare class ContentPosSaleResponse extends SpeakeasyBase {
    contentType: string;
    posSaleResponse?: shared.PosSaleResponse;
    statusCode: number;
}
