import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponseDebugInfo } from "./responsedebuginfo";
import { ErrorInfo } from "./errorinfo";
import { FacetResult } from "./facetresult";
import { QueryInterpretation } from "./queryinterpretation";
import { ResultCounts } from "./resultcounts";
import { SearchResult } from "./searchresult";
import { SpellResult } from "./spellresult";
import { StructuredResult } from "./structuredresult";


// SearchResponse
/** 
 * The search API response.
**/
export class SearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=debugInfo" })
  debugInfo?: ResponseDebugInfo;

  @Metadata({ data: "json, name=errorInfo" })
  errorInfo?: ErrorInfo;

  @Metadata({ data: "json, name=facetResults", elemType: shared.FacetResult })
  facetResults?: FacetResult[];

  @Metadata({ data: "json, name=hasMoreResults" })
  hasMoreResults?: boolean;

  @Metadata({ data: "json, name=queryInterpretation" })
  queryInterpretation?: QueryInterpretation;

  @Metadata({ data: "json, name=resultCountEstimate" })
  resultCountEstimate?: string;

  @Metadata({ data: "json, name=resultCountExact" })
  resultCountExact?: string;

  @Metadata({ data: "json, name=resultCounts" })
  resultCounts?: ResultCounts;

  @Metadata({ data: "json, name=results", elemType: shared.SearchResult })
  results?: SearchResult[];

  @Metadata({ data: "json, name=spellResults", elemType: shared.SpellResult })
  spellResults?: SpellResult[];

  @Metadata({ data: "json, name=structuredResults", elemType: shared.StructuredResult })
  structuredResults?: StructuredResult[];
}
