import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersPrimeIsFermatPrimeQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersPrimeIsFermatPrimeSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersPrimeIsFermatPrimeRequest extends SpeakeasyBase {
    queryParams: GetNumbersPrimeIsFermatPrimeQueryParams;
    security: GetNumbersPrimeIsFermatPrimeSecurity;
}
export declare class GetNumbersPrimeIsFermatPrimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
