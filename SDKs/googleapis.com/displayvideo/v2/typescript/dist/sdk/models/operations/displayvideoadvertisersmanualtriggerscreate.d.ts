import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersManualTriggersCreatePathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersManualTriggersCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersManualTriggersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersManualTriggersCreateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersManualTriggersCreatePathParams;
    queryParams: DisplayvideoAdvertisersManualTriggersCreateQueryParams;
    request?: shared.ManualTriggerInput;
    security: DisplayvideoAdvertisersManualTriggersCreateSecurity;
}
export declare class DisplayvideoAdvertisersManualTriggersCreateResponse extends SpeakeasyBase {
    contentType: string;
    manualTrigger?: shared.ManualTrigger;
    statusCode: number;
}
