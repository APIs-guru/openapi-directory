import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumbersRandomQueryParams extends SpeakeasyBase {
    max?: number;
    min?: number;
    total?: number;
}
export declare class GetNumbersRandomSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersRandomRequest extends SpeakeasyBase {
    queryParams: GetNumbersRandomQueryParams;
    security: GetNumbersRandomSecurity;
}
export declare class GetNumbersRandomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
