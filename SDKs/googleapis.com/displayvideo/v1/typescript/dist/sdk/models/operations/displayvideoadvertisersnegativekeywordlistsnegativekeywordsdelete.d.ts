import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams extends SpeakeasyBase {
    advertiserId: string;
    keywordValue: string;
    negativeKeywordListId: string;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeletePathParams;
    queryParams: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteQueryParams;
    security: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteSecurity;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
