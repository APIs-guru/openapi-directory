import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNumbersBaseHexQueryParams extends SpeakeasyBase {
    from?: number;
    number: number;
}
export declare class GetNumbersBaseHexSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersBaseHexRequest extends SpeakeasyBase {
    queryParams: GetNumbersBaseHexQueryParams;
    security: GetNumbersBaseHexSecurity;
}
export declare class GetNumbersBaseHexResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
