import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersManualTriggersPatchPathParams extends SpeakeasyBase {
    advertiserId: string;
    triggerId: string;
}
export declare class DisplayvideoAdvertisersManualTriggersPatchQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersManualTriggersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersManualTriggersPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersManualTriggersPatchPathParams;
    queryParams: DisplayvideoAdvertisersManualTriggersPatchQueryParams;
    request?: shared.ManualTriggerInput;
    security: DisplayvideoAdvertisersManualTriggersPatchSecurity;
}
export declare class DisplayvideoAdvertisersManualTriggersPatchResponse extends SpeakeasyBase {
    contentType: string;
    manualTrigger?: shared.ManualTrigger;
    statusCode: number;
}
