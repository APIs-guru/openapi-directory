import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersBiddingFunctionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBiddersBiddingFunctionsCreateQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersBiddingFunctionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersBiddingFunctionsCreateRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersBiddingFunctionsCreatePathParams;
    queryParams: RealtimebiddingBiddersBiddingFunctionsCreateQueryParams;
    request?: shared.BiddingFunctionInput;
    security: RealtimebiddingBiddersBiddingFunctionsCreateSecurity;
}
export declare class RealtimebiddingBiddersBiddingFunctionsCreateResponse extends SpeakeasyBase {
    biddingFunction?: shared.BiddingFunction;
    contentType: string;
    statusCode: number;
}
