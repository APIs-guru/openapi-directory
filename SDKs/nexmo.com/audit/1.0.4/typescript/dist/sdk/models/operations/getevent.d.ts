import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetEventSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetEventRequest extends SpeakeasyBase {
    pathParams: GetEventPathParams;
    security: GetEventSecurity;
}
export declare class GetEventResponse extends SpeakeasyBase {
    auditEvent?: shared.AuditEvent;
    contentType: string;
    errorNotFound?: shared.ErrorNotFound;
    errorUnauthorized?: shared.ErrorUnauthorized;
    statusCode: number;
}
