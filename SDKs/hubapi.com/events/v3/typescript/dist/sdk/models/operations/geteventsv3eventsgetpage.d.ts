import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEventsV3EventsGetPageQueryParams extends SpeakeasyBase {
    after?: string;
    before?: string;
    eventType?: string;
    limit?: number;
    objectId?: number;
    objectType?: string;
    occurredAfter?: Date;
    occurredBefore?: Date;
    sort?: string[];
}
export declare class GetEventsV3EventsGetPageSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetEventsV3EventsGetPageSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetEventsV3EventsGetPageSecurity extends SpeakeasyBase {
    option1?: GetEventsV3EventsGetPageSecurityOption1;
    option2?: GetEventsV3EventsGetPageSecurityOption2;
}
export declare class GetEventsV3EventsGetPageRequest extends SpeakeasyBase {
    queryParams: GetEventsV3EventsGetPageQueryParams;
    security: GetEventsV3EventsGetPageSecurity;
}
export declare class GetEventsV3EventsGetPageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    collectionResponseExternalUnifiedEvent?: shared.CollectionResponseExternalUnifiedEvent;
    contentType: string;
    statusCode: number;
}
