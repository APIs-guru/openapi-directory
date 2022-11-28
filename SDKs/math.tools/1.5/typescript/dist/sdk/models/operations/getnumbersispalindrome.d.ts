import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumbersIsPalindromeQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersIsPalindromeSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersIsPalindromeRequest extends SpeakeasyBase {
    queryParams: GetNumbersIsPalindromeQueryParams;
    security: GetNumbersIsPalindromeSecurity;
}
export declare class GetNumbersIsPalindromeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
