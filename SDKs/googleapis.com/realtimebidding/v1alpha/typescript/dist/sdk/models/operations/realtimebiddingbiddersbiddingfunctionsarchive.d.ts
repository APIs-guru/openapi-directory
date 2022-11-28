import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersBiddingFunctionsArchivePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RealtimebiddingBiddersBiddingFunctionsArchiveQueryParams extends SpeakeasyBase {
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
export declare class RealtimebiddingBiddersBiddingFunctionsArchiveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersBiddingFunctionsArchiveRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersBiddingFunctionsArchivePathParams;
    queryParams: RealtimebiddingBiddersBiddingFunctionsArchiveQueryParams;
    request?: Map<string, any>;
    security: RealtimebiddingBiddersBiddingFunctionsArchiveSecurity;
}
export declare class RealtimebiddingBiddersBiddingFunctionsArchiveResponse extends SpeakeasyBase {
    biddingFunction?: shared.BiddingFunction;
    contentType: string;
    statusCode: number;
}
