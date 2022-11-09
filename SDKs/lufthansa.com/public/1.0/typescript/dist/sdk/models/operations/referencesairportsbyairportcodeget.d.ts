import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ReferencesAirportsByAirportCodeGetPathParams extends SpeakeasyBase {
    airportCode: string;
}
export declare class ReferencesAirportsByAirportCodeGetQueryParams extends SpeakeasyBase {
    lHoperated?: boolean;
    lang?: string;
    limit?: string;
    offset?: string;
}
export declare class ReferencesAirportsByAirportCodeGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class ReferencesAirportsByAirportCodeGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class ReferencesAirportsByAirportCodeGetRequest extends SpeakeasyBase {
    pathParams: ReferencesAirportsByAirportCodeGetPathParams;
    queryParams: ReferencesAirportsByAirportCodeGetQueryParams;
    headers: ReferencesAirportsByAirportCodeGetHeaders;
    security: ReferencesAirportsByAirportCodeGetSecurity;
}
export declare class ReferencesAirportsByAirportCodeGetResponse extends SpeakeasyBase {
    airportResponse?: shared.AirportResponse;
    contentType: string;
    statusCode: number;
}
