import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=debugInfo" })
  debugInfo?: ResponseDebugInfo;

  @SpeakeasyMetadata({ data: "json, name=errorInfo" })
  errorInfo?: ErrorInfo;

  @SpeakeasyMetadata({ data: "json, name=facetResults", elemType: FacetResult })
  facetResults?: FacetResult[];

  @SpeakeasyMetadata({ data: "json, name=hasMoreResults" })
  hasMoreResults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=queryInterpretation" })
  queryInterpretation?: QueryInterpretation;

  @SpeakeasyMetadata({ data: "json, name=resultCountEstimate" })
  resultCountEstimate?: string;

  @SpeakeasyMetadata({ data: "json, name=resultCountExact" })
  resultCountExact?: string;

  @SpeakeasyMetadata({ data: "json, name=resultCounts" })
  resultCounts?: ResultCounts;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: SearchResult })
  results?: SearchResult[];

  @SpeakeasyMetadata({ data: "json, name=spellResults", elemType: SpellResult })
  spellResults?: SpellResult[];

  @SpeakeasyMetadata({ data: "json, name=structuredResults", elemType: StructuredResult })
  structuredResults?: StructuredResult[];
}
