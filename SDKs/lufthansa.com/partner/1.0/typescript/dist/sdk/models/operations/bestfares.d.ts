import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BestFaresQueryParams extends SpeakeasyBase {
    cabinClass?: string;
    catalogues: string;
    country?: string;
    destination: string;
    fareFamily?: string;
    origin: string;
    range: string;
    trackingid?: string;
    travelDate: string;
    tripDuration: string;
}
export declare class BestFaresHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class BestFaresSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class BestFaresRequest extends SpeakeasyBase {
    queryParams: BestFaresQueryParams;
    headers: BestFaresHeaders;
    security: BestFaresSecurity;
}
export declare class BestFaresResponse extends SpeakeasyBase {
    bestFares200ApplicationJsonString?: string;
    contentType: string;
    statusCode: number;
}
