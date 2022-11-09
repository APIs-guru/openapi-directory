import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersNodSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersNodRequest extends SpeakeasyBase {
    security: GetNumbersNodSecurity;
}
export declare class GetNumbersNodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
