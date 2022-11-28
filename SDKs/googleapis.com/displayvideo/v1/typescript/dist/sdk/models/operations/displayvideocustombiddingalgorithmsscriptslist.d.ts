import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams extends SpeakeasyBase {
    customBiddingAlgorithmId: string;
}
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoCustomBiddingAlgorithmsScriptsListPathParams;
    queryParams: DisplayvideoCustomBiddingAlgorithmsScriptsListQueryParams;
    security: DisplayvideoCustomBiddingAlgorithmsScriptsListSecurity;
}
export declare class DisplayvideoCustomBiddingAlgorithmsScriptsListResponse extends SpeakeasyBase {
    contentType: string;
    listCustomBiddingScriptsResponse?: shared.ListCustomBiddingScriptsResponse;
    statusCode: number;
}
