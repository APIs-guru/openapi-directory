import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersNegativeKeywordListsListPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsListQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersNegativeKeywordListsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersNegativeKeywordListsListPathParams;
    queryParams: DisplayvideoAdvertisersNegativeKeywordListsListQueryParams;
    security: DisplayvideoAdvertisersNegativeKeywordListsListSecurity;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsListResponse extends SpeakeasyBase {
    contentType: string;
    listNegativeKeywordListsResponse?: shared.ListNegativeKeywordListsResponse;
    statusCode: number;
}
