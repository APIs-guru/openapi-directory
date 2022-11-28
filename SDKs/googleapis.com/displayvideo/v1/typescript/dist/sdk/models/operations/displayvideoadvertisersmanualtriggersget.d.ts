import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersManualTriggersGetPathParams extends SpeakeasyBase {
    advertiserId: string;
    triggerId: string;
}
export declare class DisplayvideoAdvertisersManualTriggersGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersManualTriggersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersManualTriggersGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersManualTriggersGetPathParams;
    queryParams: DisplayvideoAdvertisersManualTriggersGetQueryParams;
    security: DisplayvideoAdvertisersManualTriggersGetSecurity;
}
export declare class DisplayvideoAdvertisersManualTriggersGetResponse extends SpeakeasyBase {
    contentType: string;
    manualTrigger?: shared.ManualTrigger;
    statusCode: number;
}
