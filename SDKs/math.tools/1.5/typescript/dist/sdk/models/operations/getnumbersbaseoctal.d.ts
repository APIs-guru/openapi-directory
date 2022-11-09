import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersBaseOctalQueryParams extends SpeakeasyBase {
    from?: number;
    number: number;
}
export declare class GetNumbersBaseOctalSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersBaseOctalRequest extends SpeakeasyBase {
    queryParams: GetNumbersBaseOctalQueryParams;
    security: GetNumbersBaseOctalSecurity;
}
export declare class GetNumbersBaseOctalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
