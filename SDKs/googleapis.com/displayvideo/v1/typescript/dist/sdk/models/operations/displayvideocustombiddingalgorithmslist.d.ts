import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoCustomBiddingAlgorithmsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
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
export declare class DisplayvideoCustomBiddingAlgorithmsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoCustomBiddingAlgorithmsListRequest extends SpeakeasyBase {
    queryParams: DisplayvideoCustomBiddingAlgorithmsListQueryParams;
    security: DisplayvideoCustomBiddingAlgorithmsListSecurity;
}
export declare class DisplayvideoCustomBiddingAlgorithmsListResponse extends SpeakeasyBase {
    contentType: string;
    listCustomBiddingAlgorithmsResponse?: shared.ListCustomBiddingAlgorithmsResponse;
    statusCode: number;
}
