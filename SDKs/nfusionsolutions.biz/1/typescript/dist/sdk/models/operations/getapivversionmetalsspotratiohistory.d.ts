import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiVVersionMetalsSpotRatioHistoryPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionMetalsSpotRatioHistoryQueryParams extends SpeakeasyBase {
    end?: Date;
    format?: shared.ResponseFormatEnum;
    interval?: string;
    pairs: string;
    start: Date;
    token: string;
}
export declare class GetApiVVersionMetalsSpotRatioHistoryRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionMetalsSpotRatioHistoryPathParams;
    queryParams: GetApiVVersionMetalsSpotRatioHistoryQueryParams;
}
export declare class GetApiVVersionMetalsSpotRatioHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    intervalCollectionResponses?: shared.IntervalCollectionResponse[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
