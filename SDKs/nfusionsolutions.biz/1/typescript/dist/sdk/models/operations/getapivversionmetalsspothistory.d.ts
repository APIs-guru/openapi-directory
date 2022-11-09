import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiVVersionMetalsSpotHistoryPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetApiVVersionMetalsSpotHistoryQueryParams extends SpeakeasyBase {
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
export declare class GetApiVVersionMetalsSpotHistoryRequest extends SpeakeasyBase {
    pathParams: GetApiVVersionMetalsSpotHistoryPathParams;
    queryParams: GetApiVVersionMetalsSpotHistoryQueryParams;
}
export declare class GetApiVVersionMetalsSpotHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    intervalCollectionResponses?: shared.IntervalCollectionResponse[];
    problemDetails?: Map<string, any>;
    statusCode: number;
}
