import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersNumeralRomanQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersNumeralRomanSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersNumeralRomanRequest extends SpeakeasyBase {
    queryParams: GetNumbersNumeralRomanQueryParams;
    security: GetNumbersNumeralRomanSecurity;
}
export declare class GetNumbersNumeralRomanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
