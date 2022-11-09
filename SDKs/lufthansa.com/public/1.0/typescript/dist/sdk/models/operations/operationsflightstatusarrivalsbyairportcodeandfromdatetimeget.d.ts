import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams extends SpeakeasyBase {
    airportCode: string;
    fromDateTime: string;
}
export declare class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
}
export declare class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest extends SpeakeasyBase {
    pathParams: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetPathParams;
    queryParams: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetQueryParams;
    headers: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetHeaders;
    security: OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity;
}
export declare class OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse extends SpeakeasyBase {
    contentType: string;
    operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
