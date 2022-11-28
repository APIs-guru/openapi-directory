import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersNegativeKeywordListsCreatePathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersNegativeKeywordListsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsCreateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersNegativeKeywordListsCreatePathParams;
    queryParams: DisplayvideoAdvertisersNegativeKeywordListsCreateQueryParams;
    request?: shared.NegativeKeywordListInput;
    security: DisplayvideoAdvertisersNegativeKeywordListsCreateSecurity;
}
export declare class DisplayvideoAdvertisersNegativeKeywordListsCreateResponse extends SpeakeasyBase {
    contentType: string;
    negativeKeywordList?: shared.NegativeKeywordList;
    statusCode: number;
}
