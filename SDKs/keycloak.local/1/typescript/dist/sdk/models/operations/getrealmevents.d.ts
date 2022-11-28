import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmEventsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmEventsQueryParams extends SpeakeasyBase {
    client?: string;
    dateFrom?: string;
    dateTo?: string;
    first?: number;
    ipAddress?: string;
    max?: number;
    type?: string[];
    user?: string;
}
export declare class GetRealmEventsRequest extends SpeakeasyBase {
    pathParams: GetRealmEventsPathParams;
    queryParams: GetRealmEventsQueryParams;
}
export declare class GetRealmEventsResponse extends SpeakeasyBase {
    contentType: string;
    eventRepresentations?: shared.EventRepresentation[];
    statusCode: number;
}
