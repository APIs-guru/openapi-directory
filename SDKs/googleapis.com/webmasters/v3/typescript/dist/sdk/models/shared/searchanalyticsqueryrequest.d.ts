import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDimensionFilterGroup } from "./apidimensionfiltergroup";
export declare class SearchAnalyticsQueryRequest extends SpeakeasyBase {
    aggregationType?: string;
    dataState?: string;
    dimensionFilterGroups?: ApiDimensionFilterGroup[];
    dimensions?: string[];
    endDate?: string;
    rowLimit?: number;
    searchType?: string;
    startDate?: string;
    startRow?: number;
}
