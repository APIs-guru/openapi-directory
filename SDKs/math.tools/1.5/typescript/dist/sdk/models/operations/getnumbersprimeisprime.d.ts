import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersPrimeIsPrimeQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersPrimeIsPrimeSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersPrimeIsPrimeRequest extends SpeakeasyBase {
    queryParams: GetNumbersPrimeIsPrimeQueryParams;
    security: GetNumbersPrimeIsPrimeSecurity;
}
export declare class GetNumbersPrimeIsPrimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
