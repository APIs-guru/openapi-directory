import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiUsageHistorySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ApiUsageHistoryRequest extends SpeakeasyBase {
    security: ApiUsageHistorySecurity;
}
export declare class ApiUsageHistoryResponse extends SpeakeasyBase {
    apiUsageHistoryOut?: shared.ApiUsageHistoryOut;
    contentType: string;
    statusCode: number;
}
