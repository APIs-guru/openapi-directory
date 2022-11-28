import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsQueryParams extends SpeakeasyBase {
    dateFrom?: string;
    dateTo?: string;
    eventType?: shared.EventTypesEnum;
    page?: string;
    searchText?: string;
    size?: number;
}
export declare class GetEventsSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetEventsRequest extends SpeakeasyBase {
    queryParams: GetEventsQueryParams;
    security: GetEventsSecurity;
}
export declare class GetEventsResponse extends SpeakeasyBase {
    auditResp?: shared.AuditResp;
    contentType: string;
    errorForbidden?: shared.ErrorForbidden;
    errorNotFound?: shared.ErrorNotFound;
    errorUnauthorized?: shared.ErrorUnauthorized;
    statusCode: number;
}
