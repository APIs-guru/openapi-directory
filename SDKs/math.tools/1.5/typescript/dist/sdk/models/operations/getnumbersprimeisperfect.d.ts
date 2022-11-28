import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumbersPrimeIsPerfectQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersPrimeIsPerfectSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersPrimeIsPerfectRequest extends SpeakeasyBase {
    queryParams: GetNumbersPrimeIsPerfectQueryParams;
    security: GetNumbersPrimeIsPerfectSecurity;
}
export declare class GetNumbersPrimeIsPerfectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
