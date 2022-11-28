import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersBiddingFunctionsActivatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RealtimebiddingBiddersBiddingFunctionsActivateQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersBiddingFunctionsActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersBiddingFunctionsActivateRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersBiddingFunctionsActivatePathParams;
    queryParams: RealtimebiddingBiddersBiddingFunctionsActivateQueryParams;
    request?: Map<string, any>;
    security: RealtimebiddingBiddersBiddingFunctionsActivateSecurity;
}
export declare class RealtimebiddingBiddersBiddingFunctionsActivateResponse extends SpeakeasyBase {
    biddingFunction?: shared.BiddingFunction;
    contentType: string;
    statusCode: number;
}
