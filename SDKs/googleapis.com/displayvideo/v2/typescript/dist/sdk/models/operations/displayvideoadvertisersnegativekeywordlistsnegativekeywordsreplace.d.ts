import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams extends SpeakeasyBase {
    advertiserId: string;
    negativeKeywordListId: string;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplacePathParams;
    queryParams: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceQueryParams;
    request?: shared.ReplaceNegativeKeywordsRequestInput;
    security: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceSecurity;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsReplaceResponse extends SpeakeasyBase {
    contentType: string;
    replaceNegativeKeywordsResponse?: shared.ReplaceNegativeKeywordsResponse;
    statusCode: number;
}
