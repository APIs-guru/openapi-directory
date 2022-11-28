import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumbersCardinalQueryParams extends SpeakeasyBase {
    language?: string;
    number?: number;
}
export declare class GetNumbersCardinalSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersCardinalRequest extends SpeakeasyBase {
    queryParams: GetNumbersCardinalQueryParams;
    security: GetNumbersCardinalSecurity;
}
export declare class GetNumbersCardinalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
