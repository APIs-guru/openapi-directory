import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDatafeedsFetchnowPathParams extends SpeakeasyBase {
    datafeedId: string;
    merchantId: string;
}
export declare class ContentDatafeedsFetchnowQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dryRun?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentDatafeedsFetchnowSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentDatafeedsFetchnowRequest extends SpeakeasyBase {
    pathParams: ContentDatafeedsFetchnowPathParams;
    queryParams: ContentDatafeedsFetchnowQueryParams;
    security: ContentDatafeedsFetchnowSecurity;
}
export declare class ContentDatafeedsFetchnowResponse extends SpeakeasyBase {
    contentType: string;
    datafeedsFetchNowResponse?: shared.DatafeedsFetchNowResponse;
    statusCode: number;
}
