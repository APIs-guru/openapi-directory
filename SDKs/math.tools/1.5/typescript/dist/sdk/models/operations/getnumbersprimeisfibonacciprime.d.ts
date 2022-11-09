import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersPrimeIsFibonacciPrimeQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersPrimeIsFibonacciPrimeSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersPrimeIsFibonacciPrimeRequest extends SpeakeasyBase {
    queryParams: GetNumbersPrimeIsFibonacciPrimeQueryParams;
    security: GetNumbersPrimeIsFibonacciPrimeSecurity;
}
export declare class GetNumbersPrimeIsFibonacciPrimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
