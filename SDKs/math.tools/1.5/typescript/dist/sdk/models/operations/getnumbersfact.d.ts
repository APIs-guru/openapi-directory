import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersFactQueryParams extends SpeakeasyBase {
    number: number;
}
export declare class GetNumbersFactSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersFactRequest extends SpeakeasyBase {
    queryParams: GetNumbersFactQueryParams;
    security: GetNumbersFactSecurity;
}
export declare class GetNumbersFactResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
