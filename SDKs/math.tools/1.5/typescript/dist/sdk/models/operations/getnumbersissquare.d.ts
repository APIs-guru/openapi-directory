import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersIsSquareQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersIsSquareSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersIsSquareRequest extends SpeakeasyBase {
    queryParams: GetNumbersIsSquareQueryParams;
    security: GetNumbersIsSquareSecurity;
}
export declare class GetNumbersIsSquareResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
