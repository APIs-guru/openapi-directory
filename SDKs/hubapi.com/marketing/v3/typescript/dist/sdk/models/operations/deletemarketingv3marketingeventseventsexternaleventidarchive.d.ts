import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams extends SpeakeasyBase {
    externalEventId: string;
}
export declare class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams extends SpeakeasyBase {
    externalAccountId: string;
}
export declare class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity extends SpeakeasyBase {
    option1?: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurityOption1;
    option2?: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurityOption2;
}
export declare class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest extends SpeakeasyBase {
    pathParams: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams;
    queryParams: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams;
    security: DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity;
}
export declare class DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
