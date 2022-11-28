import { SpeakeasyBase } from "../../../internal/utils";
import { ContextAttribute } from "./contextattribute";
import { DataSourceRestriction } from "./datasourcerestriction";
import { FacetOptions } from "./facetoptions";
import { QueryInterpretationOptions } from "./queryinterpretationoptions";
import { RequestOptions } from "./requestoptions";
import { SortOptions } from "./sortoptions";
/**
 * The search API request.
**/
export declare class SearchRequest extends SpeakeasyBase {
    contextAttributes?: ContextAttribute[];
    dataSourceRestrictions?: DataSourceRestriction[];
    facetOptions?: FacetOptions[];
    pageSize?: number;
    query?: string;
    queryInterpretationOptions?: QueryInterpretationOptions;
    requestOptions?: RequestOptions;
    sortOptions?: SortOptions;
    start?: number;
}
