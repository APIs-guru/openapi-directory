import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiUsageHistoryAggregateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ApiUsageHistoryAggregateRequest extends SpeakeasyBase {
    security: ApiUsageHistoryAggregateSecurity;
}
export declare class ApiUsageHistoryAggregateResponse extends SpeakeasyBase {
    apiUsageAggregatedOut?: shared.ApiUsageAggregatedOut;
    contentType: string;
    statusCode: number;
}
