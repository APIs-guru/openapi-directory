import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiVVersionMetalsBenchmarkHistoryPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionMetalsBenchmarkHistoryQueryParams extends SpeakeasyBase {
    currency?: string;
    end?: Date;
    format?: shared.ResponseFormatEnum;
    historicalfx?: boolean;
    interval?: string;
    metals: string;
    start: Date;
    token: string;
    unitofmeasure?: shared.UnitOfMeasureEnum;
}
export declare class GetApiVVersionMetalsBenchmarkHistoryRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionMetalsBenchmarkHistoryPathParams;
    queryParams: GetApiVVersionMetalsBenchmarkHistoryQueryParams;
}
export declare class GetApiVVersionMetalsBenchmarkHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    intervalCollectionResponses?: shared.IntervalCollectionResponse[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
