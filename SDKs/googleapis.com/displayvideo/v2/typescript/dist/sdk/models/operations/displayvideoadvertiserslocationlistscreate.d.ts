import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersLocationListsCreatePathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersLocationListsCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersLocationListsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersLocationListsCreateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersLocationListsCreatePathParams;
    queryParams: DisplayvideoAdvertisersLocationListsCreateQueryParams;
    request?: shared.LocationListInput;
    security: DisplayvideoAdvertisersLocationListsCreateSecurity;
}
export declare class DisplayvideoAdvertisersLocationListsCreateResponse extends SpeakeasyBase {
    contentType: string;
    locationList?: shared.LocationList;
    statusCode: number;
}
