import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCreateRequest extends SpeakeasyBase {
    queryParams: DisplayvideoAdvertisersCreateQueryParams;
    request?: shared.AdvertiserInput;
    security: DisplayvideoAdvertisersCreateSecurity;
}
export declare class DisplayvideoAdvertisersCreateResponse extends SpeakeasyBase {
    advertiser?: shared.Advertiser;
    contentType: string;
    statusCode: number;
}
