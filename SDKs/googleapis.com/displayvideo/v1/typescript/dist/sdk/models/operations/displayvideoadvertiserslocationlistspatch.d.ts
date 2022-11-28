import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLocationListsPatchPathParams extends SpeakeasyBase {
    advertiserId: string;
    locationListId: string;
}
export declare class DisplayvideoAdvertisersLocationListsPatchQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLocationListsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLocationListsPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLocationListsPatchPathParams;
    queryParams: DisplayvideoAdvertisersLocationListsPatchQueryParams;
    request?: shared.LocationListInput;
    security: DisplayvideoAdvertisersLocationListsPatchSecurity;
}
export declare class DisplayvideoAdvertisersLocationListsPatchResponse extends SpeakeasyBase {
    contentType: string;
    locationList?: shared.LocationList;
    statusCode: number;
}
