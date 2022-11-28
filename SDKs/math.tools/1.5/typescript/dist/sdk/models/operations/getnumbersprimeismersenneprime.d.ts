import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumbersPrimeIsMersennePrimeQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersPrimeIsMersennePrimeSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersPrimeIsMersennePrimeRequest extends SpeakeasyBase {
    queryParams: GetNumbersPrimeIsMersennePrimeQueryParams;
    security: GetNumbersPrimeIsMersennePrimeSecurity;
}
export declare class GetNumbersPrimeIsMersennePrimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
