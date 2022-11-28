import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumbersPrimeIsPartitionPrimeQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersPrimeIsPartitionPrimeSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersPrimeIsPartitionPrimeRequest extends SpeakeasyBase {
    queryParams: GetNumbersPrimeIsPartitionPrimeQueryParams;
    security: GetNumbersPrimeIsPartitionPrimeSecurity;
}
export declare class GetNumbersPrimeIsPartitionPrimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
