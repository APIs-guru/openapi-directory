import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseDebugInfo } from "./responsedebuginfo";
import { ErrorInfo } from "./errorinfo";
import { FacetResult } from "./facetresult";
import { QueryInterpretation } from "./queryinterpretation";
import { ResultCounts } from "./resultcounts";
import { SearchResult } from "./searchresult";
import { SpellResult } from "./spellresult";
import { StructuredResult } from "./structuredresult";
/**
 * The search API response.
**/
export declare class SearchResponse extends SpeakeasyBase {
    debugInfo?: ResponseDebugInfo;
    errorInfo?: ErrorInfo;
    facetResults?: FacetResult[];
    hasMoreResults?: boolean;
    queryInterpretation?: QueryInterpretation;
    resultCountEstimate?: string;
    resultCountExact?: string;
    resultCounts?: ResultCounts;
    results?: SearchResult[];
    spellResults?: SpellResult[];
    structuredResults?: StructuredResult[];
}
