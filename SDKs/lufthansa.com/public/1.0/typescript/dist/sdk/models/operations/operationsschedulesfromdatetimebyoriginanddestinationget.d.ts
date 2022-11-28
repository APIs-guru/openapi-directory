import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams extends SpeakeasyBase {
    destination: string;
    fromDateTime: string;
    origin: string;
}
export declare class OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams extends SpeakeasyBase {
    directFlights?: boolean;
    limit?: string;
    offset?: string;
}
export declare class OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest extends SpeakeasyBase {
    pathParams: OperationsSchedulesFromDateTimeByOriginAndDestinationGetPathParams;
    queryParams: OperationsSchedulesFromDateTimeByOriginAndDestinationGetQueryParams;
    headers: OperationsSchedulesFromDateTimeByOriginAndDestinationGetHeaders;
    security: OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity;
}
export declare class OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse extends SpeakeasyBase {
    contentType: string;
    operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
