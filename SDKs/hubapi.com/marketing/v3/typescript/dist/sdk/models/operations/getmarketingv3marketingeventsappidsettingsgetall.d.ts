import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams extends SpeakeasyBase {
    appId: number;
}
export declare class GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    developerHapikey?: shared.SchemeDeveloperHapikey;
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
