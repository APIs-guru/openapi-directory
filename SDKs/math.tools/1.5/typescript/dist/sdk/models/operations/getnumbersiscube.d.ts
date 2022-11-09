import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetNumbersIsCubeQueryParams extends SpeakeasyBase {
    number?: number;
}
export declare class GetNumbersIsCubeSecurity extends SpeakeasyBase {
    xMathtoolsApiSecret: shared.SchemeXMathtoolsApiSecret;
}
export declare class GetNumbersIsCubeRequest extends SpeakeasyBase {
    queryParams: GetNumbersIsCubeQueryParams;
    security: GetNumbersIsCubeSecurity;
}
export declare class GetNumbersIsCubeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
