import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBuyersCreativesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RealtimebiddingBuyersCreativesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RealtimebiddingBuyersCreativesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBuyersCreativesPatchRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBuyersCreativesPatchPathParams;
    queryParams: RealtimebiddingBuyersCreativesPatchQueryParams;
    request?: shared.CreativeInput;
    security: RealtimebiddingBuyersCreativesPatchSecurity;
}
export declare class RealtimebiddingBuyersCreativesPatchResponse extends SpeakeasyBase {
    contentType: string;
    creative?: shared.Creative;
    statusCode: number;
}
