import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersCurrencyQueryParams extends SpeakeasyBase {
    language?: string;
    number?: number;
}
export declare class GetNumbersCurrencySecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersCurrencyRequest extends SpeakeasyBase {
    queryParams: GetNumbersCurrencyQueryParams;
    security: GetNumbersCurrencySecurity;
}
export declare class GetNumbersCurrencyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
