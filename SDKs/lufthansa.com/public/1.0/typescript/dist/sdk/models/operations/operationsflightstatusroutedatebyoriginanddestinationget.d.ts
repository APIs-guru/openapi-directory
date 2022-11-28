import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams extends SpeakeasyBase {
    date: string;
    destination: string;
    origin: string;
}
export declare class OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
}
export declare class OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest extends SpeakeasyBase {
    pathParams: OperationsFlightstatusRouteDateByOriginAndDestinationGetPathParams;
    queryParams: OperationsFlightstatusRouteDateByOriginAndDestinationGetQueryParams;
    headers: OperationsFlightstatusRouteDateByOriginAndDestinationGetHeaders;
    security: OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity;
}
export declare class OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse extends SpeakeasyBase {
    contentType: string;
    operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
