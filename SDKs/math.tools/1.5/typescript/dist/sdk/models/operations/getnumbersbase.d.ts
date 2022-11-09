import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersBaseQueryParams extends SpeakeasyBase {
    from?: number;
    number: number;
    to: number;
}
export declare class GetNumbersBaseSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersBaseRequest extends SpeakeasyBase {
    queryParams: GetNumbersBaseQueryParams;
    security: GetNumbersBaseSecurity;
}
export declare class GetNumbersBaseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
