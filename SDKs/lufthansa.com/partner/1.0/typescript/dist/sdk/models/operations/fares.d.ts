import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FaresQueryParams extends SpeakeasyBase {
    carriers: string;
    catalogues: string;
    fareTypes?: string;
    segments: string;
    travelers?: string;
}
export declare class FaresHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class FaresSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class FaresRequest extends SpeakeasyBase {
    queryParams: FaresQueryParams;
    headers: FaresHeaders;
    security: FaresSecurity;
}
export declare class FaresResponse extends SpeakeasyBase {
    contentType: string;
    fares200ApplicationJsonString?: string;
    statusCode: number;
}
