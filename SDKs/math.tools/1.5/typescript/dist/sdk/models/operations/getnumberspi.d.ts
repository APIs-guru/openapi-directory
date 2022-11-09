import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersPiQueryParams extends SpeakeasyBase {
    from?: number;
    to?: number;
}
export declare class GetNumbersPiSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersPiRequest extends SpeakeasyBase {
    queryParams: GetNumbersPiQueryParams;
    security: GetNumbersPiSecurity;
}
export declare class GetNumbersPiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
