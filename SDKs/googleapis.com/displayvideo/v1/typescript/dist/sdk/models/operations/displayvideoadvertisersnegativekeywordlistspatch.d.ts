import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams extends SpeakeasyBase {
    advertiserId: string;
    negativeKeywordListId: string;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersNegativeKeywordListsPatchPathParams;
    queryParams: DisplayvideoAdvertisersNegativeKeywordListsPatchQueryParams;
    request?: shared.NegativeKeywordListInput;
    security: DisplayvideoAdvertisersNegativeKeywordListsPatchSecurity;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsPatchResponse extends SpeakeasyBase {
    contentType: string;
    negativeKeywordList?: shared.NegativeKeywordList;
    statusCode: number;
}
