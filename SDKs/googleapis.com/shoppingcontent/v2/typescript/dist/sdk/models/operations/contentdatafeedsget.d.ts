import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDatafeedsGetPathParams extends SpeakeasyBase {
    datafeedId: string;
    merchantId: string;
}
export declare class ContentDatafeedsGetQueryParams extends SpeakeasyBase {
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
export declare class ContentDatafeedsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentDatafeedsGetRequest extends SpeakeasyBase {
    pathParams: ContentDatafeedsGetPathParams;
    queryParams: ContentDatafeedsGetQueryParams;
    security: ContentDatafeedsGetSecurity;
}
export declare class ContentDatafeedsGetResponse extends SpeakeasyBase {
    contentType: string;
    datafeed?: shared.Datafeed;
    statusCode: number;
}
