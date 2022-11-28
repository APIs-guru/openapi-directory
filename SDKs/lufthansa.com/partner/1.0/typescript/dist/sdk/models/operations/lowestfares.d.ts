import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LowestFaresQueryParams extends SpeakeasyBase {
    cabinClass?: string;
    catalogues: string;
    country?: string;
    destination: string;
    fareFamily?: string;
    origin: string;
    returnDate?: string;
    travelDate: string;
    travelers?: string;
}
export declare class LowestFaresHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class LowestFaresSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class LowestFaresRequest extends SpeakeasyBase {
    queryParams: LowestFaresQueryParams;
    headers: LowestFaresHeaders;
    security: LowestFaresSecurity;
}
export declare class LowestFaresResponse extends SpeakeasyBase {
    contentType: string;
    lowestFares200ApplicationJsonString?: string;
    statusCode: number;
}
