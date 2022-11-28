import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiV1BillsBillIdStagesPathParams extends SpeakeasyBase {
    billId: number;
}
export declare class GetApiV1BillsBillIdStagesQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetApiV1BillsBillIdStagesRequest extends SpeakeasyBase {
    pathParams: GetApiV1BillsBillIdStagesPathParams;
    queryParams: GetApiV1BillsBillIdStagesQueryParams;
}
export declare class GetApiV1BillsBillIdStagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    stageSummarySearchResult?: shared.StageSummarySearchResult;
    statusCode: number;
}
