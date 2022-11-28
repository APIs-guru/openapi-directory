import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RealtimebiddingBiddersBiddingFunctionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RealtimebiddingBiddersBiddingFunctionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RealtimebiddingBiddersBiddingFunctionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RealtimebiddingBiddersBiddingFunctionsListRequest extends SpeakeasyBase {
    pathParams: RealtimebiddingBiddersBiddingFunctionsListPathParams;
    queryParams: RealtimebiddingBiddersBiddingFunctionsListQueryParams;
    security: RealtimebiddingBiddersBiddingFunctionsListSecurity;
}
export declare class RealtimebiddingBiddersBiddingFunctionsListResponse extends SpeakeasyBase {
    contentType: string;
    listBiddingFunctionsResponse?: shared.ListBiddingFunctionsResponse;
    statusCode: number;
}
