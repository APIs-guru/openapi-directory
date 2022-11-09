import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams extends SpeakeasyBase {
    externalEventId: string;
}
export declare class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity extends SpeakeasyBase {
    option1?: PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurityOption1;
    option2?: PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurityOption2;
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
