import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SeatDetailsPathParams extends SpeakeasyBase {
    aircraftCode: string;
    cabinCode: string;
}
export declare class SeatDetailsQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class SeatDetailsHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class SeatDetailsSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class SeatDetailsRequest extends SpeakeasyBase {
    pathParams: SeatDetailsPathParams;
    queryParams: SeatDetailsQueryParams;
    headers: SeatDetailsHeaders;
    security: SeatDetailsSecurity;
}
export declare class SeatDetailsResponse extends SpeakeasyBase {
    contentType: string;
    seatDetails200ApplicationJsonString?: string;
    statusCode: number;
}
