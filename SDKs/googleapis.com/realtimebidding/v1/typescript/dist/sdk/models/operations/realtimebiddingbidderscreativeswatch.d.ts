import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersCreativesWatchPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBiddersCreativesWatchQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersCreativesWatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersCreativesWatchRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersCreativesWatchPathParams;
    queryParams: RealtimebiddingBiddersCreativesWatchQueryParams;
    request?: Map<string, any>;
    security: RealtimebiddingBiddersCreativesWatchSecurity;
}
export declare class RealtimebiddingBiddersCreativesWatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    watchCreativesResponse?: shared.WatchCreativesResponse;
}
