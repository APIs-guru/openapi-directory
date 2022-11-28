import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersGetPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersGetPathParams;
    queryParams: DisplayvideoAdvertisersGetQueryParams;
    security: DisplayvideoAdvertisersGetSecurity;
}
export declare class DisplayvideoAdvertisersGetResponse extends SpeakeasyBase {
    advertiser?: shared.Advertiser;
    contentType: string;
    statusCode: number;
}
