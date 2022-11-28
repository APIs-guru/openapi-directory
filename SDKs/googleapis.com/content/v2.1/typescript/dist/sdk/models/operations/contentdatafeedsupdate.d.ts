import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDatafeedsUpdatePathParams extends SpeakeasyBase {
    datafeedId: string;
    merchantId: string;
}
export declare class ContentDatafeedsUpdateQueryParams extends SpeakeasyBase {
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
export declare class ContentDatafeedsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentDatafeedsUpdateRequest extends SpeakeasyBase {
    pathParams: ContentDatafeedsUpdatePathParams;
    queryParams: ContentDatafeedsUpdateQueryParams;
    request?: shared.Datafeed;
    security: ContentDatafeedsUpdateSecurity;
}
export declare class ContentDatafeedsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    datafeed?: shared.Datafeed;
    statusCode: number;
}
