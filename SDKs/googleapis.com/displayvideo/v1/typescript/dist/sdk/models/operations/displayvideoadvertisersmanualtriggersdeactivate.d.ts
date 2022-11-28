import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersManualTriggersDeactivatePathParams extends SpeakeasyBase {
    advertiserId: string;
    triggerId: string;
}
export declare class DisplayvideoAdvertisersManualTriggersDeactivateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersManualTriggersDeactivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersManualTriggersDeactivateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersManualTriggersDeactivatePathParams;
    queryParams: DisplayvideoAdvertisersManualTriggersDeactivateQueryParams;
    request?: Map<string, any>;
    security: DisplayvideoAdvertisersManualTriggersDeactivateSecurity;
}
export declare class DisplayvideoAdvertisersManualTriggersDeactivateResponse extends SpeakeasyBase {
    contentType: string;
    manualTrigger?: shared.ManualTrigger;
    statusCode: number;
}
