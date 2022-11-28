import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumbersBaseBinaryQueryParams extends SpeakeasyBase {
    from?: number;
    number: number;
}
export declare class GetNumbersBaseBinarySecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersBaseBinaryRequest extends SpeakeasyBase {
    queryParams: GetNumbersBaseBinaryQueryParams;
    security: GetNumbersBaseBinarySecurity;
}
export declare class GetNumbersBaseBinaryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
