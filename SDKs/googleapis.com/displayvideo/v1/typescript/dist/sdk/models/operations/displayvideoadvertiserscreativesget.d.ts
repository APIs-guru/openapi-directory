import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersCreativesGetPathParams extends SpeakeasyBase {
    advertiserId: string;
    creativeId: string;
}
export declare class DisplayvideoAdvertisersCreativesGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersCreativesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCreativesGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersCreativesGetPathParams;
    queryParams: DisplayvideoAdvertisersCreativesGetQueryParams;
    security: DisplayvideoAdvertisersCreativesGetSecurity;
}
export declare class DisplayvideoAdvertisersCreativesGetResponse extends SpeakeasyBase {
    contentType: string;
    creative?: shared.Creative;
    statusCode: number;
}
