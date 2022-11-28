import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DownloadUsageHistoryPathParams extends SpeakeasyBase {
    key: string;
}
export declare class DownloadUsageHistoryQueryParams extends SpeakeasyBase {
    end?: number;
    licensee?: string;
    start?: number;
}
export declare class DownloadUsageHistorySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class DownloadUsageHistoryRequest extends SpeakeasyBase {
    pathParams: DownloadUsageHistoryPathParams;
    queryParams: DownloadUsageHistoryQueryParams;
    security: DownloadUsageHistorySecurity;
}
export declare class DownloadUsageHistoryResponse extends SpeakeasyBase {
    contentType: string;
    downloadUsageHistory200TextCsvString?: string;
    errorResponseSchema?: shared.ErrorResponseSchema;
    statusCode: number;
}
