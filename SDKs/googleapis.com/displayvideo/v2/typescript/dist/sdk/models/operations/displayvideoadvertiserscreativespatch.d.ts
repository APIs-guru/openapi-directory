import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersCreativesPatchPathParams extends SpeakeasyBase {
    advertiserId: string;
    creativeId: string;
}
export declare class DisplayvideoAdvertisersCreativesPatchQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersCreativesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCreativesPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersCreativesPatchPathParams;
    queryParams: DisplayvideoAdvertisersCreativesPatchQueryParams;
    request?: shared.CreativeInput;
    security: DisplayvideoAdvertisersCreativesPatchSecurity;
}
export declare class DisplayvideoAdvertisersCreativesPatchResponse extends SpeakeasyBase {
    contentType: string;
    creative?: shared.Creative;
    statusCode: number;
}
