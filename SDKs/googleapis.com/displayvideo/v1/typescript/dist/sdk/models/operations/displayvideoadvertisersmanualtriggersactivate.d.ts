import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersManualTriggersActivatePathParams extends SpeakeasyBase {
    advertiserId: string;
    triggerId: string;
}
export declare class DisplayvideoAdvertisersManualTriggersActivateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersManualTriggersActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersManualTriggersActivateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersManualTriggersActivatePathParams;
    queryParams: DisplayvideoAdvertisersManualTriggersActivateQueryParams;
    request?: Map<string, any>;
    security: DisplayvideoAdvertisersManualTriggersActivateSecurity;
}
export declare class DisplayvideoAdvertisersManualTriggersActivateResponse extends SpeakeasyBase {
    contentType: string;
    manualTrigger?: shared.ManualTrigger;
    statusCode: number;
}
