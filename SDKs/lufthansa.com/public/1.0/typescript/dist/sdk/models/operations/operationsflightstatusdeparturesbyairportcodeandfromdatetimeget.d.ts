import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams extends SpeakeasyBase {
    airportCode: string;
    fromDateTime: string;
}
export declare class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
}
export declare class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest extends SpeakeasyBase {
    pathParams: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetPathParams;
    queryParams: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetQueryParams;
    headers: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetHeaders;
    security: OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity;
}
export declare class OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse extends SpeakeasyBase {
    contentType: string;
    operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
