import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersOrdinalQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersOrdinalSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersOrdinalRequest extends SpeakeasyBase {
    queryParams: GetNumbersOrdinalQueryParams;
    security: GetNumbersOrdinalSecurity;
}
export declare class GetNumbersOrdinalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
