import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams extends SpeakeasyBase {
    appId: number;
}
export declare class GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurityOption2 extends SpeakeasyBase {
    developerHapikey: shared.SchemeDeveloperHapikey;
}
export declare class GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity extends SpeakeasyBase {
    option1?: GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurityOption1;
    option2?: GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurityOption2;
}
export declare class GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest extends SpeakeasyBase {
    pathParams: GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams;
    security: GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity;
}
export declare class GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    eventDetailSettings?: shared.EventDetailSettings;
    statusCode: number;
}
