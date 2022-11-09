import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SearchResult } from "./searchresult";
import { ResultDebugInfo } from "./resultdebuginfo";
import { Metadata } from "./metadata";
import { Snippet } from "./snippet";


// SearchResult
/** 
 * Results containing indexed information for a document.
**/
export class SearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusteredResults", elemType: shared.SearchResult })
  clusteredResults?: SearchResult[];

  @Metadata({ data: "json, name=debugInfo" })
  debugInfo?: ResultDebugInfo;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @Metadata({ data: "json, name=snippet" })
  snippet?: Snippet;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
