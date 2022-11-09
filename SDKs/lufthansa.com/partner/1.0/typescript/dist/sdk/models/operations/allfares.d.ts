import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AllFaresQueryParams extends SpeakeasyBase {
    cabinClass?: string;
    catalogues: string;
    destination: string;
    fareFamily?: string;
    origin: string;
    returnDate?: string;
    trackingid?: string;
    travelDate: string;
    travelers?: string;
}
export declare class AllFaresHeaders extends SpeakeasyBase {
    accept?: string;
}
export declare class AllFaresSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class AllFaresRequest extends SpeakeasyBase {
    queryParams: AllFaresQueryParams;
    headers: AllFaresHeaders;
    security: AllFaresSecurity;
}
export declare class AllFaresResponse extends SpeakeasyBase {
    allFares200ApplicationJsonString?: string;
    contentType: string;
    statusCode: number;
}
