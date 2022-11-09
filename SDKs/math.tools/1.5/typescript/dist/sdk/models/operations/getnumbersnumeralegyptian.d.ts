import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersNumeralEgyptianQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersNumeralEgyptianSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersNumeralEgyptianRequest extends SpeakeasyBase {
    queryParams: GetNumbersNumeralEgyptianQueryParams;
    security: GetNumbersNumeralEgyptianSecurity;
}
export declare class GetNumbersNumeralEgyptianResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
