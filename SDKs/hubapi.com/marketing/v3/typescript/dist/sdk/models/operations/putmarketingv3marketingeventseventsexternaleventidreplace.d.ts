import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams extends SpeakeasyBase {
    externalEventId: string;
}
export declare class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest extends SpeakeasyBase {
    pathParams: PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams;
    request: shared.MarketingEventCreateRequestParams;
    security: PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity;
}
export declare class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    marketingEventPublicDefaultResponse?: shared.MarketingEventPublicDefaultResponse;
    statusCode: number;
}
