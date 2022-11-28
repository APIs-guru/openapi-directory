import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBuyersCreativesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBuyersCreativesCreateQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBuyersCreativesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBuyersCreativesCreateRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBuyersCreativesCreatePathParams;
    queryParams: RealtimebiddingBuyersCreativesCreateQueryParams;
    request?: shared.CreativeInput;
    security: RealtimebiddingBuyersCreativesCreateSecurity;
}
export declare class RealtimebiddingBuyersCreativesCreateResponse extends SpeakeasyBase {
    contentType: string;
    creative?: shared.Creative;
    statusCode: number;
}
