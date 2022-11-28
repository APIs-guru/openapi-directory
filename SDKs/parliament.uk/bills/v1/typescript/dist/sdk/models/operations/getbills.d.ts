import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBillsQueryParams extends SpeakeasyBase {
    billIds?: number[];
    billStage?: number[];
    billStagesExcluded?: number[];
    billType?: number[];
    currentHouse?: shared.HouseEnum;
    departmentId?: number;
    isDefeated?: boolean;
    isWithdrawn?: boolean;
    memberId?: number;
    originatingHouse?: shared.OriginatingHouseEnum;
    searchTerm?: string;
    session?: number;
    skip?: number;
    sortOrder?: shared.BillSortOrderEnum;
    take?: number;
}
export declare class GetBillsRequest extends SpeakeasyBase {
    queryParams: GetBillsQueryParams;
}
export declare class GetBillsResponse extends SpeakeasyBase {
    billSummarySearchResult?: shared.BillSummarySearchResult;
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
