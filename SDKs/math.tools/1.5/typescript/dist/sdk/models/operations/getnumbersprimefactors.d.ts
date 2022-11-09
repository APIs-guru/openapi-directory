import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersPrimeFactorsQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersPrimeFactorsSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersPrimeFactorsRequest extends SpeakeasyBase {
    queryParams: GetNumbersPrimeFactorsQueryParams;
    security: GetNumbersPrimeFactorsSecurity;
}
export declare class GetNumbersPrimeFactorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
