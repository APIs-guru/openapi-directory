import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OperationsFlightstatusByFlightNumberAndDateGetPathParams extends SpeakeasyBase {
    date: string;
    flightNumber: string;
}
export declare class OperationsFlightstatusByFlightNumberAndDateGetQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
}
export declare class OperationsFlightstatusByFlightNumberAndDateGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class OperationsFlightstatusByFlightNumberAndDateGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class OperationsFlightstatusByFlightNumberAndDateGetRequest extends SpeakeasyBase {
    pathParams: OperationsFlightstatusByFlightNumberAndDateGetPathParams;
    queryParams: OperationsFlightstatusByFlightNumberAndDateGetQueryParams;
    headers: OperationsFlightstatusByFlightNumberAndDateGetHeaders;
    security: OperationsFlightstatusByFlightNumberAndDateGetSecurity;
}
export declare class OperationsFlightstatusByFlightNumberAndDateGetResponse extends SpeakeasyBase {
    contentType: string;
    operationsFlightstatusByFlightNumberAndDateGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
