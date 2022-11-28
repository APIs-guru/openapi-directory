import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumbersNumeralChineseQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersNumeralChineseSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersNumeralChineseRequest extends SpeakeasyBase {
    queryParams: GetNumbersNumeralChineseQueryParams;
    security: GetNumbersNumeralChineseSecurity;
}
export declare class GetNumbersNumeralChineseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
