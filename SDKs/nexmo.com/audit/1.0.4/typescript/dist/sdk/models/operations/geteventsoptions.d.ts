import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventsOptionsSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetEventsOptionsRequest extends SpeakeasyBase {
    security: GetEventsOptionsSecurity;
}
export declare class GetEventsOptionsResponse extends SpeakeasyBase {
    auditEventTypesResp?: shared.AuditEventTypesResp;
    contentType: string;
    errorForbidden?: shared.ErrorForbidden;
    errorUnauthorized?: shared.ErrorUnauthorized;
    noContent?: shared.NoContent;
    statusCode: number;
}
