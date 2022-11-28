import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumbersPrimeIsPellPrimeQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersPrimeIsPellPrimeSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersPrimeIsPellPrimeRequest extends SpeakeasyBase {
    queryParams: GetNumbersPrimeIsPellPrimeQueryParams;
    security: GetNumbersPrimeIsPellPrimeSecurity;
}
export declare class GetNumbersPrimeIsPellPrimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
