import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersIsTriangleQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersIsTriangleSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersIsTriangleRequest extends SpeakeasyBase {
    queryParams: GetNumbersIsTriangleQueryParams;
    security: GetNumbersIsTriangleSecurity;
}
export declare class GetNumbersIsTriangleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
