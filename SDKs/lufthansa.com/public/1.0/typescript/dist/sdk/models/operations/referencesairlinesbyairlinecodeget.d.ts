import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReferencesAirlinesByAirlineCodeGetPathParams extends SpeakeasyBase {
    airlineCode: string;
}
export declare class ReferencesAirlinesByAirlineCodeGetQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
}
export declare class ReferencesAirlinesByAirlineCodeGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class ReferencesAirlinesByAirlineCodeGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class ReferencesAirlinesByAirlineCodeGetRequest extends SpeakeasyBase {
    pathParams: ReferencesAirlinesByAirlineCodeGetPathParams;
    queryParams: ReferencesAirlinesByAirlineCodeGetQueryParams;
    headers: ReferencesAirlinesByAirlineCodeGetHeaders;
    security: ReferencesAirlinesByAirlineCodeGetSecurity;
}
export declare class ReferencesAirlinesByAirlineCodeGetResponse extends SpeakeasyBase {
    contentType: string;
    referencesAirlinesByAirlineCodeGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
