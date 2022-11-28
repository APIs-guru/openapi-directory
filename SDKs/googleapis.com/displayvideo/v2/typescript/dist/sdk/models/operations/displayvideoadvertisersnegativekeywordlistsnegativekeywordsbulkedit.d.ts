import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditPathParams extends SpeakeasyBase {
    advertiserId: string;
    negativeKeywordListId: string;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditPathParams;
    queryParams: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditQueryParams;
    request?: shared.BulkEditNegativeKeywordsRequestInput;
    security: DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditSecurity;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsNegativeKeywordsBulkEditResponse extends SpeakeasyBase {
    bulkEditNegativeKeywordsResponse?: shared.BulkEditNegativeKeywordsResponse;
    contentType: string;
    statusCode: number;
}
