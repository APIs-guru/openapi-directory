import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams extends SpeakeasyBase {
    appId: number;
}
export declare class PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    developerHapikey?: shared.SchemeDeveloperHapikey;
}
export declare class PostMarketingV3MarketingEventsAppIdSettingsCreateRequest extends SpeakeasyBase {
    pathParams: PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams;
    request: shared.EventDetailSettingsUrl;
    security: PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity;
}
export declare class PostMarketingV3MarketingEventsAppIdSettingsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    eventDetailSettings?: shared.EventDetailSettings;
    statusCode: number;
}
