import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListPathParams extends SpeakeasyBase {
    advertiserId: string;
    negativeKeywordListId: string;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListPathParams;
    queryParams: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListQueryParams;
    security: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListSecurity;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsListResponse extends SpeakeasyBase {
    contentType: string;
    listNegativeKeywordsResponse?: shared.ListNegativeKeywordsResponse;
    statusCode: number;
}
